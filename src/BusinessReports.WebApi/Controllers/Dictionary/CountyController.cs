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
    [Route("api/counties", Name = "Counties")]
    public class CountyController : CrudController<Domain.Dictionary.County, Models.Dictionary.County>
    {
        public CountyController(IRepository<Domain.Dictionary.County> repository, IMapper mapper) 
            : base(repository, mapper)
        {
        }

        protected override Expression<Func<Domain.Dictionary.County, bool>> GetSearchPredicate(string search)
        {
            return c => c.Name == search || c.Code == search;
        }
    }
}
