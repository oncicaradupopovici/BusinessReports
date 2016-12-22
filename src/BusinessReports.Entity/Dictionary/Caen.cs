﻿using Avocado.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessReports.Entity.Dictionary
{
    public class Caen : CodedEntityBase
    {
        [MaxLength(100)]
        [Required]
        public string Name { get; set; }

    }
}