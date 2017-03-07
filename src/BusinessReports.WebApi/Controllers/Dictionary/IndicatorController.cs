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
    [Route("api/indicators", Name = "Indicators")]
    public class IndicatorController : CrudController<Domain.Dictionary.Indicator, Models.Dictionary.Indicator>
    {
        public IndicatorController(IRepository<Domain.Dictionary.Indicator> repository, IMapper mapper) 
            : base(repository, mapper)
        {
        }

        protected override Expression<Func<Domain.Dictionary.Indicator, bool>> GetSearchPredicate(string search)
        {
            return c => c.Name.Contains(search) || c.Code.Contains(search);
        }


    }
}
