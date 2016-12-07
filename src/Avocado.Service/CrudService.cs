using Avocado.Core;
using Avocado.Data.Contracts;
using Avocado.Entity;
using Avocado.Service.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Avocado.Service
{
    public class CrudService<TEntity> : ICrudService<TEntity> 
        where TEntity : class, IEntity, IdAccessor, new()
    {
        protected IRepository<TEntity> repo;

        public CrudService(IRepository<TEntity> repo)
        {
            this.repo = repo;
        }

        public async Task<TEntity> GetSingleAsync(int id)
        {
            return await repo.GetSingleAsync(id);
        }

        public virtual IQueryable<TEntity> GetAll()
        {
            return repo.GetAll();
        }

        public virtual IQueryable<TEntity> Where(Expression<Func<TEntity, bool>> predicate)
        {
            return repo.Where(predicate);
        }

        public virtual void Create(TEntity e)
        {
            repo.Insert(e);
        }

        public void Update(TEntity entity)
        {
            repo.Update(entity);
        }

        public virtual void Delete(int id)
        {
            repo.Delete(id);
        }

        public async Task SaveAsync()
        {
            await repo.SaveAsync();
        }

        public void Dispose()
        {
            repo.Dispose();
        }

    }
}
