//using Avocado.Core;
//using Avocado.Entity;
//using Avocado.Service.Contracts;
//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.Linq;
//using System.Threading.Tasks;

//namespace Avocado.Web.DataAnnotations
//{
//    public class UniquePropertyValidationAttribute: ValidationAttribute
//    {
//        private IServiceProvider _serviceProvider;

//        public UniquePropertyValidationAttribute(IServiceProvider serviceProvider)
//        {
//            this._serviceProvider = serviceProvider;
//        }
//        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
//        {
//            var propertyName = validationContext.MemberName;
//            var entityType = validationContext.ObjectType;
//            var entity = validationContext.ObjectInstance as IdAccessor;

//            var crudServiceType = typeof(ICrudService<>).MakeGenericType(entityType);
//            var crudService = _serviceProvider.GetService(crudServiceType) as ICrudService<IEntity>

//            return base.IsValid(value, validationContext);
//        }
//    }
//}
