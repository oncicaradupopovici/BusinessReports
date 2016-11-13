using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.WebApi.Models.Dictionary
{
    public class Country
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(20)]
        public string Code { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
    }
}
