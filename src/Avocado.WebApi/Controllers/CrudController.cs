using AutoMapper;
using AutoMapper.QueryableExtensions;
using Avocado.Core;
using Avocado.Data.Contracts;
using Avocado.Domain;
using Avocado.WebApi.Consts;
using Avocado.WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Http;
using System.Threading.Tasks;

namespace Avocado.WebApi.Controllers
{
    public abstract class CrudController<TEntity, TModel> : Controller
        where TEntity : class, IEntity, IdAccessor, new()
        where TModel: IModel, IdAccessor, new()

    {
        protected IRepository<TEntity> _repository;
        protected IMapper _mapper;

        public CrudController(IRepository<TEntity> repository, IMapper mapper)
        {
            this._repository = repository;
            this._mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<TModel>> GetAllAsync(string search, int? page, int pageSize = 20)
        {
            var query = this._repository.GetAll();
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

        [HttpGet("select-list")]
        public async Task<IEnumerable<SelectListItem>> GetSelectList()
        {
            var query = this._repository.GetAll().ProjectTo<SelectListItem>();
            var data = await query.ToListAsync();
            return data;
        }


        [HttpGet("{id}"/*, Name = "GetItem"*/)]
        public async Task<IActionResult> GetSingleAsync(int id)
        {
            var entity = await _repository.GetSingleAsync(id);
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
            this._repository.Insert(entity);
            await this._repository.SaveAsync();

            var result = _mapper.Map<TEntity, TModel>(entity);
            //return CreatedAtRoute("GetItem", new { id = entity.Id }, result);
            return Ok(result);
        }

        [HttpPost("import")]
        public async Task<IActionResult> ImportAsync([FromBody]IEnumerable<TModel> modelList)
        {
            if (modelList == null || !modelList.Any())
            {
                return BadRequest();
            }

            var entityList = _mapper.Map<IEnumerable<TModel>, IEnumerable<TEntity>>(modelList);
            var newEntities = entityList.Where(e => e.Id == 0).ToList();
            var existentEntities = entityList.Where(e => e.Id != 0).ToList();
            _repository.InsertRange(newEntities);
            _repository.UpdateRange(existentEntities);
            await _repository.SaveAsync();

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody]TModel model)
        {
            if (model == null)
            {
                return BadRequest("Missing model");
            }

            var entity = await _repository.GetSingleAsync(model.Id);
            if (entity == null)
            {
                return NotFound();
            }

            _mapper.Map(model, entity);
            await this._repository.SaveAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        //[HttpDelete]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var entity = await _repository.GetSingleAsync(id);
            if (entity == null)
            {
                return NotFound();
            }

            this._repository.Delete(id);
            await this._repository.SaveAsync();

            return NoContent();
        }



        protected abstract Expression<Func<TEntity, bool>> GetSearchPredicate(string search);

    }
}
