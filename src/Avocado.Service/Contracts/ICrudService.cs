using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avocado.Entity;
using System.Linq.Expressions;
using Avocado.Core;

namespace Avocado.Service.Contracts
{
    public interface ICrudService<TEntity> : IDisposable 
        where TEntity : IEntity, IdAccessor, new()
    {
        Task<TEntity> GetSingleAsync(int id);
        IQueryable<TEntity> GetAll();
        IQueryable<TEntity> Where(Expression<Func<TEntity, bool>> func);
        void Create(TEntity e);
        void Update(TEntity entity);
        void Delete(int id);
        Task SaveAsync();
    }
}
