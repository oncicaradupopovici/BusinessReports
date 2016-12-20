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
        public DbSet<Country> Countries { get; set; }
        public DbSet<County> Counties { get; set; }
        public DbSet<City> Cities { get; set; }

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

            //builder.Entity<CodedEntityBase>()
            //    .HasIndex(e => e.Code)
            //    .IsUnique();

            //var entitiesAss = typeof(Country).GetTypeInfo().Assembly;
            //foreach(var type in entitiesAss.GetTypes().Where(t=> typeof(CodedEntityBase).IsAssignableFrom(t) && !t.GetTypeInfo().IsAbstract))
            //{
            //    builder.Entity(type).HasIndex("Code").IsUnique();
            //}

            foreach (var entity in builder.Model.GetEntityTypes().Where(e=> typeof(CodedEntityBase).IsAssignableFrom(e.ClrType)))
            {
                //entity.AddIndex(entity.FindProperty("Code")).IsUnique = true;
                builder.Entity(entity.Name).HasIndex("Code").IsUnique();
                //builder.Entity(entity.ClrType).HasIndex("Code").IsUnique();
            }
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(_config.GetConnectionString("DefaultConnection"));
        //    base.OnConfiguring(optionsBuilder);
        //}
    }
}
