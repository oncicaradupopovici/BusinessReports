using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.WebApi.AutoMapperProfile
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Entity.Dictionary.Country, Models.Dictionary.Country>()
                .ReverseMap();
            CreateMap<Entity.Dictionary.Country, Avocado.Web.Models.SelectListItem>();

            CreateMap<Entity.Dictionary.County, Models.Dictionary.County>()
                .ReverseMap();
            CreateMap<Entity.Dictionary.County, Avocado.Web.Models.SelectListItem>();

            CreateMap<Entity.Dictionary.City, Models.Dictionary.City>()
                .ReverseMap();
            CreateMap<Entity.Dictionary.City, Avocado.Web.Models.SelectListItem>();
        }
    }
}
