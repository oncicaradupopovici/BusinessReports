using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.Reflection;
using AutoMapper;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using Avocado.Web.Consts;
using Avocado.Web.Extensions.DependencyInjection;
using BusinessReports.Service.Extensions;
using BusinessReports.Data.Extensions;
using Newtonsoft.Json;
using Avocado.Web.Models;
using Newtonsoft.Json.Serialization;
using BusinessReports.Entity.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using BusinessReports.Data;

namespace BusinessReports.WebApi
{
    public class Startup
    {
        private IConfigurationRoot _configuration;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            _configuration = builder.Build();
        }
        
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(_configuration);
            services.AddCors();
            services.AddMvc();          
            services.AddAutoMapper(Assembly.GetEntryAssembly());

            services.AddAvocado();
            services.AddBusinessReportsDataAccess(_configuration);
            services.AddBusinessReportServices();
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<BusinessReportsDbContext>()
                .AddDefaultTokenProviders();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IServiceScopeFactory scopeFactory)
        {
            loggerFactory.AddConsole(_configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseIdentity();

            app.UseCors(builder =>
                builder.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod()
                .WithExposedHeaders(Headers.PaginationHeader)
            );

            app.UseExceptionHandler(
              builder =>
              {
                  builder.Run(
                    async context =>
                    {
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        context.Response.Headers.Add("Access-Control-Allow-Origin", "*");

                        var error = context.Features.Get<IExceptionHandlerFeature>();
                        if (error != null)
                        {
                            await context.Response.WriteAsync(
                                JsonConvert.SerializeObject( new ApiError { Message = error.Error.Message, Details = error.ToString() }, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver()} )).ConfigureAwait(false);
                        }
                    });
              });

            app.UseMvc();

            app.UseBusinessReportsDataAccess();

            //using (var scope = scopeFactory.CreateScope())
            //{
            //    var initializer = scope.ServiceProvider.GetService<BusinessReportsInitializer>();
            //    initializer.SeedAsync().Wait();
            //}
        }
    }
}
