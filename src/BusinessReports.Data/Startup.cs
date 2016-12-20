using BusinessReports.Data.Extensions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BusinessReports.Data
{
    // HACK to get Migrations to work.
    public class Startup
    {
        private IConfigurationRoot _config;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
              .SetBasePath(env.ContentRootPath)
              .AddJsonFile("config.json", false, true)
              .AddEnvironmentVariables();

            _config = builder.Build();

        }

        public void ConfigureServices(IServiceCollection svc)
        {
            svc.AddSingleton(_config);
            svc.AddBusinessReportsDataAccess(_config);
        }

        //public void Configure(IApplicationBuilder app)
        //{
        //    app.UseIdentity();
        //}
    }
}
