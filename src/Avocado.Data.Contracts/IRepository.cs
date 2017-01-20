using Avocado.Core;
using Avocado.Domain;
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
        void InsertRange(IEnumerable<TEntity> list);
        void Update(TEntity entity);
        void UpdateRange(IEnumerable<TEntity> list);
        void Delete(int id);
        Task SaveAsync();
    }
}
