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
    [Route("api/[controller]", Name = "Counties")]
    public class CountyController : CrudController<Entity.Dictionary.County, Models.Dictionary.County>
    {
        public CountyController(ICrudService<Entity.Dictionary.County> crudSvc, IMapper mapper) 
            : base(crudSvc, mapper)
        {
        }

        protected override Expression<Func<Entity.Dictionary.County, bool>> GetSearchPredicate(string search)
        {
            return c => c.Name == search || c.Code == search;
        }
    }
}
