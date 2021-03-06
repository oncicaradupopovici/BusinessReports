﻿using AutoMapper;
using Avocado.WebApi.Controllers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Avocado.WebApi.Models;
using BusinessReports.Domain.Dictionary;

namespace BusinessReports.WebApi.Controllers.Api.Dictionary
{
    [Route("api/indicatortypes", Name = "IndicatorTypes")]
    public class IndicatorTypeController : Controller
    {
        [HttpGet("select-list")]
        public IEnumerable<SelectListItem> GetIndicatorTypeSelectList()
        {
            var values = Enum.GetValues(typeof(IndicatorType))
                .Cast<IndicatorType>()
                .Select(it => new SelectListItem
                {
                    Id = (int)it,
                    Name = it.ToString()
                });
            return values;
        }
    }
}
