using Avocado.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.Entity.Dictionary
{
    public class Country : CodedEntityBase
    {
        [MaxLength(100)]
        [Required]
        public string Name { get; set; }
    }
}
