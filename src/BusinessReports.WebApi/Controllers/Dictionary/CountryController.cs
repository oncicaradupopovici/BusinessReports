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
    [Route("api/[controller]", Name = "Countries")]
    public class CountryController : CrudController<Entity.Dictionary.Country, Models.Dictionary.Country>
    {
        public CountryController(ICrudService<Entity.Dictionary.Country> crudSvc, IMapper mapper) 
            : base(crudSvc, mapper)
        {
        }

        protected override Expression<Func<Entity.Dictionary.Country, bool>> GetSearchPredicate(string search)
        {
            return c => c.Name.Contains(search) || c.Code.Contains(search);
        }
    }
}
