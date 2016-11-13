using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.Entity
{
    public interface IEntity
    {
    }

    public interface IdEntity: IEntity
    {
        int Id { get; set; }
    }
}
