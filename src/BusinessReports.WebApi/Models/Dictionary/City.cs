using Avocado.Core;
using Avocado.WebApi.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.WebApi.Models.Dictionary
{
    public class City : IModel, IdAccessor
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        public int CountyId { get; set; }
        public string CountyName { get; set; }

    }
}
