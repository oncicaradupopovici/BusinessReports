using Avocado.Data.Extensions;
using Avocado.Service.Extensions.DependencyInjection;
using Avocado.Web.ActionFilters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;

namespace Avocado.Web.Extensions.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        public static void AddAvocado(this IServiceCollection services)
        {
            services.AddAvocadoDataAccess();
            services.AddAvocadoService();
            services.AddAvocadoWeb();
        }

        public static void AddAvocadoWeb(this IServiceCollection services)
        {
            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new ValidateModelActionFilter());
                options.Filters.Add(new ApiExceptionFilter());
            });

            services.Configure<MvcJsonOptions>(options =>
            {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            });
        }
    }
}
