using AutoMapper;
using Avocado.Web.Controllers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Avocado.Service.Contracts;
using System.Linq.Expressions;
using Avocado.Web.Models;
using BusinessReports.Entity.Dictionary;

namespace BusinessReports.WebApi.Controllers.Api.Dictionary
{
    [Route("api/[controller]", Name = "Indicators")]
    public class IndicatorController : CrudController<Entity.Dictionary.Indicator, Models.Dictionary.Indicator>
    {
        public IndicatorController(ICrudService<Entity.Dictionary.Indicator> crudSvc, IMapper mapper) 
            : base(crudSvc, mapper)
        {
        }

        protected override Expression<Func<Entity.Dictionary.Indicator, bool>> GetSearchPredicate(string search)
        {
            return c => c.Name.Contains(search) || c.Code.Contains(search);
        }


    }
}
