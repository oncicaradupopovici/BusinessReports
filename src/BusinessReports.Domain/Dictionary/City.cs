using Avocado.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.Domain.Dictionary
{
    public class City : EntityBase
    {
        [MaxLength(100)]
        [Required]
        public string Name { get; set; }

        [Required]
        public int CountyId { get; set; }

        public virtual County County { get; set; }
    }
}
