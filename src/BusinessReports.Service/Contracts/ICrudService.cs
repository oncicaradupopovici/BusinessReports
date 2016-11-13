using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessReports.Entity;
using System.Linq.Expressions;

namespace BusinessReports.Service.Contracts
{
    public interface ICrudService<T> : IDisposable where T : IdEntity, new()
    {
        T Get(int id);
        IEnumerable<T> GetAll();
        IEnumerable<T> Where(Expression<Func<T, bool>> func);
        int Create(T e, bool save = true);
        void CreateBulk(IEnumerable<T> entities);
        void Update(T entity);
        void Delete(int id, bool save = true);
        void Save();


        //bool AutoDetectChangesEnabled
        //{
        //    set;
        //}

        //void UpdateGraph(T entity, IEnumerable<string> navigationProperties = null);

        //IEnumerable<T> DynamicWhere(string where, Dictionary<string, object> parameters);
        //IEnumerable<IDataRecord> DynamicQuery(string select, string where, string groupBy, Dictionary<string, object> parameters);
    }
}
