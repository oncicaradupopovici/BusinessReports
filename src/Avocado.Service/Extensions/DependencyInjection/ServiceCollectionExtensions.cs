using Avocado.Service.Contracts;
using Microsoft.Extensions.DependencyInjection;

namespace Avocado.Service.Extensions.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        public static void AddAvocadoService(this IServiceCollection services)
        {
            services.AddScoped(typeof(ICrudService<>), typeof(CrudService<>));
        }
    }
}
