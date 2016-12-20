//using Avocado.Core;
//using Avocado.Data.Contracts;
//using Avocado.Entity;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace Avocado.Service
//{
//    public class UniquePropertyValidationService<TEntity>
//         where TEntity : class, IEntity, IdAccessor, new()
//    {
//        protected IRepository<TEntity> repo;

//        public UniquePropertyValidationService(IRepository<TEntity> repo)
//        {
//            this.repo = repo;
//        }

//        public bool IsValid(TEntity entity, string propertyName)
//        {
//            var exists = this.repo.Where(e => e.Id == 1);
//        }
//    }
//}
