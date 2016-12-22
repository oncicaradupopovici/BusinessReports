using BusinessReports.Entity.Dictionary;
using BusinessReports.Entity.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.Data
{
    public class BusinessReportsInitializer
    {
        private BusinessReportsDbContext _ctx;
        private UserManager<User> _userMgr;

        public BusinessReportsInitializer(BusinessReportsDbContext ctx, UserManager<User> userMgr)
        {
            _ctx = ctx;
            _userMgr = userMgr;
        }

        public async Task SeedAsync()
        {
            await Task.Run(() => { });

            //// Seed User
            //if (await _userMgr.FindByNameAsync("shawnwildermuth") == null)
            //{
            //    var user = new WilderUser()
            //    {
            //        Email = "shawn@wildermuth.com",
            //        UserName = "shawnwildermuth",
            //        EmailConfirmed = true
            //    };

            //    var result = await _userMgr.CreateAsync(user, "P@ssw0rd!"); // Temp Password
            //    if (!result.Succeeded) throw new InvalidProgramException("Failed to create seed user");
            //}


            //Seed country
            //if (_ctx.Countries.FirstOrDefault(c=> c.Code == "RO") == null)
            //{
            //    var c = new Country
            //    {
            //        Code = "RO",
            //        Name = "Romania"
            //    };
            //    _ctx.Countries.Add(c);
            //    await _ctx.SaveChangesAsync();
            //}
        }
    }
}
