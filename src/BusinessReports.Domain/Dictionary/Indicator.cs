using Avocado.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.Domain.Dictionary
{
    public class Indicator : CodedEntityBase
    {
        [MaxLength(100)]
        [Required]
        public string Name { get; set; }

        [Required]
        public IndicatorType IndicatorType { get;set;}

        [MaxLength(1000)]
        public string Arguments { get; set; }
    }
}
