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
    [Route("api/caens", Name = "Caens")]
    public class CaenController : CrudController<Domain.Dictionary.Caen, Models.Dictionary.Caen>
    {
        public CaenController(IRepository<Domain.Dictionary.Caen> repository, IMapper mapper) 
            : base(repository, mapper)
        {
        }

        protected override Expression<Func<Domain.Dictionary.Caen, bool>> GetSearchPredicate(string search)
        {
            return c => c.Name.Contains(search) || c.Code.Contains(search);
        }
    }
}
