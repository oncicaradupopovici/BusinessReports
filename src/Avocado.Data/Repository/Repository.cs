using Avocado.Core;
using Avocado.Data.Contracts;
using Avocado.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Avocado.Data.Repository
{
    public class Repository<TEntity, TContext> : IRepository<TEntity>
        where TEntity : class, IEntity, IdAccessor, new()
        where TContext : DbContext
    {

        protected readonly DbContext _c;

        public Repository(IServiceProvider services)
        {
            this._c = services.GetService(typeof(TContext)) as DbContext;
        }


        public async virtual Task<TEntity> GetSingleAsync(int id)
        {
            return await _c.Set<TEntity>().FirstOrDefaultAsync(e => e.Id == id);
        }

        public virtual IQueryable<TEntity> GetAll()
        {
            return _c.Set<TEntity>();
        }

        public virtual IQueryable<TEntity> Where(Expression<Func<TEntity, bool>> predicate)
        {
            return GetAll().Where(predicate);
        }

        public void Insert(TEntity entity)
        {
            //_c.Add<TEntity>(entity);
            _c.Set<TEntity>().Add(entity);
        }

        public void InsertRange(IEnumerable<TEntity> list)
        {
            _c.Set<TEntity>().AddRange(list);
        }

        public void Update(TEntity entity)
        {            
            //_c.Update<TEntity>(entity);
            _c.Set<TEntity>().Update(entity);
        }

        public void UpdateRange(IEnumerable<TEntity> list)
        {
            _c.Set<TEntity>().UpdateRange(list);
        }

        public virtual void Delete(int id)
        {
            var entity = GetSingleAsync(id).Result;
            _c.Set<TEntity>().Remove(entity);
        }

        public async Task SaveAsync()
        {
            await _c.SaveChangesAsync();
        }

        public void Dispose()
        {
            _c.Dispose();
        }
    }
}
