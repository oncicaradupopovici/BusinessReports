using Avocado.Core;
using Avocado.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Avocado.Data.Contracts
{
    public interface IRepository<TEntity> : IDisposable
        where TEntity : class, IEntity, IdAccessor, new()
    {
        Task<TEntity> GetSingleAsync(int id);
        IQueryable<TEntity> GetAll();
        IQueryable<TEntity> Where(Expression<Func<TEntity, bool>> predicate);
        void Insert(TEntity entity);
        void Update(TEntity entity);
        void Delete(int id);
        Task SaveAsync();
    }
}
