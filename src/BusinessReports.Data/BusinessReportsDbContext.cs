using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using BusinessReports.Entity.Identity;
using Microsoft.Extensions.Configuration;
using System.Reflection;
using BusinessReports.Entity;
using BusinessReports.Entity.Dictionary;
using Avocado.Entity;

namespace BusinessReports.Data
{
    public class BusinessReportsDbContext : IdentityDbContext<User>
    {
        public DbSet<County> Counties { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Caen> Caens { get; set; }
        public DbSet<Indicator> Indicators { get; set; }

        public BusinessReportsDbContext(DbContextOptions<BusinessReportsDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            builder.Entity<User>().ToTable("Users"); // Your custom IdentityUser class
            builder.Entity<IdentityUserLogin<string>>().ToTable("UserLogins");
            builder.Entity<IdentityUserToken<string>>().ToTable("UserTokens");
            builder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims");
            builder.Entity<IdentityUserRole<string>>().ToTable("UserRoles");
            builder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaims");
            builder.Entity<IdentityRole>().ToTable("Roles");


            foreach (var entity in builder.Model.GetEntityTypes().Where(e=> typeof(CodedEntityBase).IsAssignableFrom(e.ClrType)))
            {
                builder.Entity(entity.Name).HasIndex("Code").IsUnique();
            }

            builder.Entity<City>().HasIndex(c => new { c.Name, c.CountyId }).IsUnique();
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(_config.GetConnectionString("DefaultConnection"));
        //    base.OnConfiguring(optionsBuilder);
        //}
    }
}
