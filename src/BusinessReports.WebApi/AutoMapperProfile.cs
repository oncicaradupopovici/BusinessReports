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
            CreateMap<Entity.Dictionary.County, Models.Dictionary.County>()
                .ReverseMap();
            CreateMap<Entity.Dictionary.County, Avocado.Web.Models.SelectListItem>();

            CreateMap<Entity.Dictionary.City, Models.Dictionary.City>()
                .ReverseMap();
            CreateMap<Entity.Dictionary.City, Avocado.Web.Models.SelectListItem>();

            CreateMap<Entity.Dictionary.Caen, Models.Dictionary.Caen>()
                .ReverseMap();
            CreateMap<Entity.Dictionary.Caen, Avocado.Web.Models.SelectListItem>();

            CreateMap<Entity.Dictionary.Indicator, Models.Dictionary.Indicator>()
                .ReverseMap();
            CreateMap<Entity.Dictionary.Indicator, Avocado.Web.Models.SelectListItem>();
        }
    }
}
