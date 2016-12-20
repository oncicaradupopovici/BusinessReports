using AutoMapper;
using Avocado.Web.Controllers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Avocado.Service.Contracts;
using System.Linq.Expressions;

namespace BusinessReports.WebApi.Controllers.Api.Dictionary
{
    [Route("api/[controller]", Name = "Cities")]
    public class CityController : CrudController<Entity.Dictionary.City, Models.Dictionary.City>
    {
        public CityController(ICrudService<Entity.Dictionary.City> crudSvc, IMapper mapper) 
            : base(crudSvc, mapper)
        {
        }

        protected override Expression<Func<Entity.Dictionary.City, bool>> GetSearchPredicate(string search)
        {
            return c => c.Name == search || c.Code == search;
        }
    }
}
