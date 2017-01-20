using Microsoft.Extensions.DependencyInjection;
using Avocado.Data.Contracts;
using Avocado.Data.Repository;
using System.Reflection;
using System;
using System.Linq;
using Avocado.Domain;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


namespace Avocado.Data.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddAvocadoDataAccess(this IServiceCollection services)
        {
            return services;
        }

        public static IServiceCollection AddAvocadoRepositoriesFor(this IServiceCollection services, Assembly entityAssembly, Type DbContextType)
        {
            var entityTypes = GetEntityTypesFromAssembly(entityAssembly);
            foreach (var entityType in entityTypes)
            {
                var interfaceType = typeof(IRepository<>).MakeGenericType(entityType);
                var serviceType = typeof(Repository<,>).MakeGenericType(entityType, DbContextType);
                services.AddScoped(interfaceType, serviceType);
            }

            return services;
        }


        private static IEnumerable<Type> GetEntityTypesFromAssembly(Assembly entityAssembly)
        {
            return entityAssembly.GetTypes().Where(t => typeof(IEntity).IsAssignableFrom(t));
        }
    }
}
