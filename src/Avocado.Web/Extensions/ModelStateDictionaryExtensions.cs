using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Avocado.Web.Extensions
{
    public static class ModelStateDictionaryExtensions
    {
        public static Dictionary<string, string[]> GetErrors(this ModelStateDictionary modelState)
        {
            return modelState
                .Where(kvp => kvp.Value.Errors.Count > 0)
                .ToDictionary(
                    kvp => kvp.Key,
                    kvp => kvp.Value.Errors.Select(e => e.ErrorMessage).ToArray());
        }
    }
}
