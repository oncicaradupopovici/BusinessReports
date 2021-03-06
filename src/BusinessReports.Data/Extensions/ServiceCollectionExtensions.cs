﻿using Avocado.Data.Repository;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Avocado.Data.Extensions;
using System.Reflection;

namespace BusinessReports.Data.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddBusinessReportsDataAccess(this IServiceCollection services, IConfigurationRoot config)
        {
            services.AddEntityFrameworkSqlServer().AddDbContext<BusinessReportsDbContext>((serviceProvider, options) =>
                options
                    .UseSqlServer(config.GetConnectionString("DefaultConnection"), b=> b.MigrationsAssembly("BusinessReports.WebApi"))
                    .UseInternalServiceProvider(serviceProvider));

           //services.AddTransient<BusinessReportsInitializer>();

            services.AddAvocadoRepositoriesFor(Assembly.Load(new AssemblyName("BusinessReports.Domain")), typeof(BusinessReportsDbContext));
            return services;
        }

        //public static IApplicationBuilder UseBusinessReportsDataAccess(this IApplicationBuilder app)
        //{
        //    using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
        //    {
        //        //serviceScope.ServiceProvider.GetService<BusinessReportsDbContext>().Database.EnsureCreated();
        //        serviceScope.ServiceProvider.GetService<BusinessReportsDbContext>().Database.Migrate();
        //        //serviceScope.ServiceProvider.GetService<BusinessReportsDbContext>().EnsureSeedData();
        //    }

        //    return app;
        //}
    }
}
