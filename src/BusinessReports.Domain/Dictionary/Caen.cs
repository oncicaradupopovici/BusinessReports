using Avocado.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.Domain.Dictionary
{
    public class Caen : CodedEntityBase
    {
        [MaxLength(100)]
        [Required]
        public string Name { get; set; }

    }
}
