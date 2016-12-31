using Avocado.Data.Extensions;
using Avocado.Service.Extensions.DependencyInjection;
using Avocado.WebApi.ActionFilters;
using Avocado.WebApi.Formatters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json.Serialization;

namespace Avocado.WebApi.Extensions.DependencyInjection
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
            var csvFormatterOptions = new CsvFormatterOptions();

            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new ValidateModelActionFilter());
                options.Filters.Add(new ApiExceptionFilter());

                options.InputFormatters.Add(new CsvInputFormatter(csvFormatterOptions));
                options.OutputFormatters.Add(new CsvOutputFormatter(csvFormatterOptions));
                options.FormatterMappings.SetMediaTypeMappingForFormat("csv", MediaTypeHeaderValue.Parse("text/csv"));
            });

            services.Configure<MvcJsonOptions>(options =>
            {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            });
        }
    }
}
