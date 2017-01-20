using AutoMapper;
using Avocado.Data.Contracts;
using Avocado.WebApi.Controllers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace BusinessReports.WebApi.Controllers.Api.Dictionary
{
    [Route("api/[controller]", Name = "Cities")]
    public class CityController : CrudController<Domain.Dictionary.City, Models.Dictionary.City>
    {
        public CityController(IRepository<Domain.Dictionary.City> crudSvc, IMapper mapper) 
            : base(crudSvc, mapper)
        {
        }

        protected override Expression<Func<Domain.Dictionary.City, bool>> GetSearchPredicate(string search)
        {
            return c => c.Name == search;
        }
    }
}
