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
    [Route("api/[controller]", Name = "Caens")]
    public class CaenController : CrudController<Entity.Dictionary.Caen, Models.Dictionary.Caen>
    {
        public CaenController(ICrudService<Entity.Dictionary.Caen> crudSvc, IMapper mapper) 
            : base(crudSvc, mapper)
        {
        }

        protected override Expression<Func<Entity.Dictionary.Caen, bool>> GetSearchPredicate(string search)
        {
            return c => c.Name.Contains(search) || c.Code.Contains(search);
        }
    }
}
