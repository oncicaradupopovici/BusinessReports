using BusinessReports.Data.Repository;
using BusinessReports.Data.Contracts;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using BusinessReports.Entity.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace BusinessReports.Data
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddBusinessReportsDataAccess(this IServiceCollection services, IConfigurationRoot config)
        {
            services.AddDbContext<BusinessReportsDbContext>(options =>
                options.UseSqlServer(config.GetConnectionString("DefaultConnection")));

            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<BusinessReportsDbContext>()
                .AddDefaultTokenProviders();

            services.AddTransient<BusinessReportsInitializer>();

            services.AddScoped(typeof(IRepo<>), typeof(Repo<>));
            return services;
        }
    }
}
