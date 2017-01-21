using AutoMapper;
using AutoMapper.QueryableExtensions;
using Avocado.Data.Contracts;
using Avocado.WebApi.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BusinessReports.WebApi.Controllers.Api.Dictionary
{
    [Route("api/cities", Name = "Cities")]
    public class CityController : CrudController<Domain.Dictionary.City, Models.Dictionary.City>
    {
        public CityController(IRepository<Domain.Dictionary.City> crudSvc, IMapper mapper) 
            : base(crudSvc, mapper)
        {
        }

        // GET /api/counties/1/cities
        [Route("~/api/counties/{countyId:int}/cities")]
        public async Task<IEnumerable<Models.Dictionary.City>> GetByCountyAsync(int countyId)
        {
            var query = this._repository
                .Where(c => c.CountyId == countyId)
                .ProjectTo<Models.Dictionary.City>();

            var data = await query.ToListAsync();
            return data;

        }

        protected override Expression<Func<Domain.Dictionary.City, bool>> GetSearchPredicate(string search)
        {
            return c => c.Name == search;
        }
    }
}
