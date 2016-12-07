using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avocado.Data.Repository;
using Microsoft.EntityFrameworkCore;
using Avocado.Entity;
using Avocado.Core;

namespace BusinessReports.Data.Repository
{
    internal class BusinessReportRepository<T> : Repository<T>
        where T : class, IEntity, IdAccessor, new()
    {
        public BusinessReportRepository(BusinessReportsDbContext c) 
            : base(c)
        {
        }
    }
}
