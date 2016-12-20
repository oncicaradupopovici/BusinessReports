using Avocado.Service;
using Avocado.Service.Contracts;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.Service.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddBusinessReportServices(this IServiceCollection serviceCollection)
        {
            return serviceCollection;
        }
    }
}
