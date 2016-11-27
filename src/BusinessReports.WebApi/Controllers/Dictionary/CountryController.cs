using AutoMapper;
using BusinessReports.Service.Contracts;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BusinessReports.WebApi.Controllers.Api.Dictionary
{
    [Route("/api/country")]
    public class CountryController : Controller
    {
        private ICrudService<Entity.Dictionaries.Country> _crudSvc;
        private IMapper _mapper;

        public CountryController(ICrudService<Entity.Dictionaries.Country> crudSvc, IMapper mapper)
        {
            this._crudSvc = crudSvc;
            this._mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<Models.Dictionary.Country> GetAll()
        {
            var data = _crudSvc.GetAll().Select(c => _mapper.Map<Entity.Dictionaries.Country, Models.Dictionary.Country>(c));
            return data;
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var item = _crudSvc.Get(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody]Models.Dictionary.Country country)
        {
            if (country == null)
            {
                return BadRequest();
            }

            try
            {
                var c = _mapper.Map<Models.Dictionary.Country, Entity.Dictionaries.Country>(country);
                this._crudSvc.Create(c);
                this._crudSvc.Save();

                return NoContent();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IActionResult Update([FromBody]Models.Dictionary.Country country)
        {
            if (country == null)
            {
                return BadRequest();
            }

            //var item = _crudSvc.Get(country.Id);
            //if (item == null)
            //{
            //    return NotFound();
            //}

            try
            {
                var c = _mapper.Map<Models.Dictionary.Country, Entity.Dictionaries.Country>(country);
                this._crudSvc.Update(c);
                this._crudSvc.Save();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
