using AutoMapper;
using AutoMapper.QueryableExtensions;
using Avocado.Core;
using Avocado.Entity;
using Avocado.Service.Contracts;
using Avocado.Web.Consts;
using Avocado.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Avocado.Web.Controllers
{
    //[Route("api/[controller]", Name = "Countries")]
    public abstract class CrudController<TEntity, TModel> : Controller
        where TEntity : IEntity, IdAccessor, new()
        where TModel: IModel, IdAccessor, new()

    {
        private ICrudService<TEntity> _crudSvc;
        private IMapper _mapper;

        public CrudController(ICrudService<TEntity> crudSvc, IMapper mapper)
        {
            this._crudSvc = crudSvc;
            this._mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<TModel>> GetAllAsync(string search, int? page, int pageSize = 20)
        {
            var query = this._crudSvc.GetAll();
            if (!string.IsNullOrWhiteSpace(search))
                query = query.Where(GetSearchPredicate(search));

            var q = query.ProjectTo<TModel>();

            if (page.HasValue)
            {
                var totalCount = await q.CountAsync();
                var totalPages = (int)Math.Ceiling((double)totalCount / pageSize);
                //var prevPageLink = page > 0 ? Url.RouteUrl(new { page = page - 1, pageSize = pageSize }) : "";
                //var nextPageLink = page < totalPages - 1 ? Url.RouteUrl(new { page = page + 1, pageSize = pageSize }) : "";

                var paginationHeader = new
                {
                    Page = page.Value,
                    PageSize = pageSize,
                    TotalCount = totalCount,
                    TotalPages = totalPages,
                    //PrevPageLink = prevPageLink,
                    //NextPageLink = nextPageLink
                };
                Response.Headers.Add(Headers.PaginationHeader, JsonConvert.SerializeObject(paginationHeader, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver()}));

                q = q
                    .Skip(pageSize * (page.Value - 1))
                    .Take(pageSize);
            }

            var data = await q.ToListAsync();
            return data;
        }

        [HttpGet("select")]
        public async Task<IEnumerable<SelectListItem>> GetSelectList()
        {
            var query = this._crudSvc.GetAll().ProjectTo<SelectListItem>();
            var data = await query.ToListAsync();
            return data;
        }


        [HttpGet("{id}"/*, Name = "GetItem"*/)]
        public async Task<IActionResult> GetSingleAsync(int id)
        {
            var entity = await _crudSvc.GetSingleAsync(id);
            if (entity == null)
            {
                return NotFound();
            }

            var model = _mapper.Map<TEntity, TModel>(entity);
            return new ObjectResult(model);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync([FromBody]TModel model)
        {
            if (model == null || model.Id != 0)
            {
                return BadRequest();
            }

            var entity = _mapper.Map<TModel, TEntity>(model);
            this._crudSvc.Create(entity);
            await this._crudSvc.SaveAsync();

            var result = _mapper.Map<TEntity, TModel>(entity);
            //return CreatedAtRoute("GetItem", new { id = entity.Id }, result);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody]TModel model)
        {
            if (model == null)
            {
                return BadRequest("Missing model");
            }

            var entity = await _crudSvc.GetSingleAsync(model.Id);
            if (entity == null)
            {
                return NotFound();
            }

            _mapper.Map(model, entity);
            await this._crudSvc.SaveAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        //[HttpDelete]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var entity = await _crudSvc.GetSingleAsync(id);
            if (entity == null)
            {
                return NotFound();
            }

            this._crudSvc.Delete(id);
            await this._crudSvc.SaveAsync();

            return NoContent();
        }



        protected abstract Expression<Func<TEntity, bool>> GetSearchPredicate(string search);

    }
}
