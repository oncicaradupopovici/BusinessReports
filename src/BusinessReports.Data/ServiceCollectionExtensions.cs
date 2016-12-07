using BusinessReports.Data.Repository;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using BusinessReports.Entity.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Avocado.Data.Contracts;

namespace BusinessReports.Data
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddBusinessReportsDataAccess(this IServiceCollection services, IConfigurationRoot config)
        {
            services.AddEntityFrameworkSqlServer().AddDbContext<BusinessReportsDbContext>((serviceProvider, options) =>
                options
                    .UseSqlServer(config.GetConnectionString("DefaultConnection"))
                    .UseInternalServiceProvider(serviceProvider));
            services.AddOptions();

            //services.AddDbContext<BusinessReportsDbContext>(options =>
            //    options.UseSqlServer(config.GetConnectionString("DefaultConnection")));

            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<BusinessReportsDbContext>()
                .AddDefaultTokenProviders();

           //services.AddTransient<BusinessReportsInitializer>();

            services.AddScoped(typeof(IRepository<>), typeof(BusinessReportRepository<>));
            return services;
        }

        public static IApplicationBuilder UseBusinessReportsDataAccess(this IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                //serviceScope.ServiceProvider.GetService<BusinessReportsDbContext>().Database.EnsureCreated();
                serviceScope.ServiceProvider.GetService<BusinessReportsDbContext>().Database.Migrate();
                //serviceScope.ServiceProvider.GetService<BusinessReportsDbContext>().EnsureSeedData();
            }

            return app;
        }
    }
}
