using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.WebApi.AutoMapperProfile
{
    public class AutoMapperProfileConfiguration : Profile
    {
        public AutoMapperProfileConfiguration()
        {
            CreateMap<Entity.Dictionary.Country, Models.Dictionary.Country>().ReverseMap();
            CreateMap<Entity.Dictionary.County, Models.Dictionary.County>().ReverseMap();
        }
    }
}
