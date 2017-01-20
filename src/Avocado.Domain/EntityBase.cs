using Avocado.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Avocado.Domain
{
    public abstract class EntityBase : IEntity, IdAccessor
    {
        [Key]
        public int Id { get; set; }
    }

    public abstract class CodedEntityBase : EntityBase, IValidatableObject
    {
        [MaxLength(20)]
        [Required]
        public string Code { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            yield return ValidationResult.Success;
        }
    }
}
