using BusinessReports.Service.Contracts;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.Service
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddBusinessReportServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped(typeof(ICrudService<>), typeof(CrudService<>));
            return serviceCollection;
        }
    }
}
