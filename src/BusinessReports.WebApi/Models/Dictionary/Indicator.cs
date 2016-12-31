using Avocado.Core;
using Avocado.WebApi.Models;
using BusinessReports.Entity.Dictionary;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.WebApi.Models.Dictionary
{
    public class Indicator : IModel, IdAccessor
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string Code { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        public IndicatorType IndicatorType { get; set; }

        [MaxLength(1000)]
        public string Arguments { get; set; }

    }
}
