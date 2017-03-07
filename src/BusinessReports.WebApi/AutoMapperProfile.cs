using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avocado.WebApi.Models;

namespace BusinessReports.WebApi.AutoMapperProfile
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Domain.Dictionary.County, Models.Dictionary.County>()
                .ReverseMap();
            CreateMap<Domain.Dictionary.County, SelectListItem>();

            CreateMap<Domain.Dictionary.City, Models.Dictionary.City>()
                .ReverseMap();
            CreateMap<Domain.Dictionary.City, SelectListItem>();

            CreateMap<Domain.Dictionary.Caen, Models.Dictionary.Caen>()
                .ReverseMap();
            CreateMap<Domain.Dictionary.Caen, SelectListItem>();

            CreateMap<Domain.Dictionary.Indicator, Models.Dictionary.Indicator>()
                .ForMember(dest => dest.IndicatorTypeName, source => source.MapFrom(src => src.IndicatorType.ToString()));
            CreateMap<Models.Dictionary.Indicator, Domain.Dictionary.Indicator>();
            CreateMap<Domain.Dictionary.Indicator, SelectListItem>();
        }
    }
}
