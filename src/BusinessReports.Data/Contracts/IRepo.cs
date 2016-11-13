using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BusinessReports.Data.Contracts
{
    public interface IRepo<T> : IDisposable
    {
        T Get(int id);
        IQueryable<T> GetAll();
        IQueryable<T> Where(Expression<Func<T, bool>> predicate);

        //IQueryable<T> DynamicWhere(string where, Dictionary<string, object> parameters);
        //IQueryable<IDataRecord> DynamicQuery(string select, string where, string groupBy, Dictionary<string, object> parameters);

        T Insert(T o);
        void InsertBulk(IEnumerable<T> enities);
        void Update(T entity);
        //void UpdateGraph(T entity, IEnumerable<string> navigationProperties = null);
        void Delete(T o);
        void Save();

        //bool AutoDetectChangesEnabled
        //{
        //    set;
        //}
    }
}
