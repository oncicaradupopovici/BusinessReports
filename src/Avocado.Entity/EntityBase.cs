using Avocado.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Avocado.Entity
{
    public abstract class EntityBase : IEntity, IdAccessor
    {
        [Key]
        public int Id { get; set; }
    }

    public abstract class CodedEntityBase : EntityBase
    {
        [MaxLength(20)]
        [Required]
        public string Code { get; set; }
    }
}
