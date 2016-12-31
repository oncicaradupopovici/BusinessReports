using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Avocado.WebApi.Models
{
    public class ApiError
    {
        public string Message { get; set; }
        public string Details { get; set; }
        public Dictionary<string, string[]> Validations { get; set; }
    }
}
