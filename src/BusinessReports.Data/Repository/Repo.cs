using BusinessReports.Data.Contracts;
using BusinessReports.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BusinessReports.Data.Repository
{
    internal class Repo<T> : IRepo<T>
        where T : class, IdEntity, new()
    {

        protected readonly DbContext _c;

        public Repo(BusinessReportsDbContext c)
        {
            this._c = c;
        }

        //public bool AutoDetectChangesEnabled
        //{
        //    set
        //    {
        //        c.Configuration.AutoDetectChangesEnabled = value;
        //    }
        //}


        public T Get(int id)
        {
            // _c.Set<T>().AsNoTracking();
            return _c.Set<T>().FirstOrDefault(e => e.Id == id);
        }

        public virtual IQueryable<T> GetAll()
        {
            return _c.Set<T>();
        }

        public virtual IQueryable<T> Where(Expression<Func<T, bool>> predicate)
        {
            return GetAll().Where(predicate);
        }

        //private ObjectQuery<T> GetObjectQuery()
        //{
        //    ObjectContext objectContext = ((IObjectContextAdapter)c).ObjectContext;
        //    ObjectQuery<T> objectQuery = objectContext.CreateObjectSet<T>();
        //    return objectQuery;
        //}

        //public IQueryable<T> DynamicWhere(string where, Dictionary<string, object> parameters)
        //{
        //    var objectQuery = GetObjectQuery();
        //    var objectParameters = parameters.Select(p => new ObjectParameter(p.Key, p.Value)).ToArray();
        //    objectQuery = objectQuery.Where(where, objectParameters);

        //    var q = objectQuery.AsQueryable<T>();
        //    return q;
        //}

        //public IQueryable<IDataRecord> DynamicQuery(string select, string where, string groupBy, Dictionary<string, object> parameters)
        //{
        //    if (parameters == null)
        //        parameters = new Dictionary<string, object>();

        //    var objectQuery = GetObjectQuery();
        //    var objectParameters = parameters.Select(p => new ObjectParameter(p.Key, p.Value)).ToArray();
        //    if (!string.IsNullOrWhiteSpace(where))
        //        objectQuery = objectQuery.Where(where, objectParameters);

        //    var grouppedQuery = objectQuery.GroupBy(groupBy, select, objectParameters);

        //    var q = grouppedQuery.AsQueryable<IDataRecord>();
        //    return q;
        //}


        public T Insert(T entity)
        {
            _c.Add<T>(entity);
            //_c.Set<T>().Add(entity);
            return entity;
        }

        public void InsertBulk(IEnumerable<T> enities)
        {
            _c.AddRange(enities);
            //_c.Set<T>().AddRange(enities);
        }

        public void Update(T entity)
        {
            
            _c.Update<T>(entity);
            //_c.Set<T>().Update(entity);
            //_c.Entry<T>(entity).State = EntityState.Modified;
        }

        //public void UpdateGraph(T entity, IEnumerable<string> navigationProperties = null)
        //{
        //    //c.Entry<T>(entity).State = EntityState.Modified;

        //    var ctxEntity = Get(entity.Id);
        //    c.Entry<T>(ctxEntity).CurrentValues.SetValues(entity);
        //    if (navigationProperties != null)
        //    {
        //        foreach (var nav in navigationProperties)
        //        {
        //            var ctxCollectionEntry = c.Entry<T>(ctxEntity).Collection(nav);
        //            var ctxCollection = //(IEnumerable<IEntity>)ctxCollectionEntry.CurrentValue;
        //                ReflectionHelper.GetPropertyValue<IEnumerable<IEntity>>(ctxEntity, nav);
        //            var collection = ReflectionHelper.GetPropertyValue<IEnumerable<IEntity>>(entity, nav);


        //            if (collection == null)
        //            {
        //                foreach (var ctxSubEntity in ctxCollection.ToList())
        //                {
        //                    c.Entry(ctxSubEntity).State = EntityState.Deleted;
        //                }
        //            }
        //            else
        //            {

        //                foreach (var ctxSubEntity in ctxCollection.ToList())
        //                {
        //                    var subEntity = collection.FirstOrDefault(e => e.Id == ctxSubEntity.Id);
        //                    if (subEntity != null)
        //                    {
        //                        //c.Entry(subEntity).State = EntityState.Modified;
        //                        c.Entry(ctxSubEntity).CurrentValues.SetValues(subEntity);
        //                    }
        //                    else
        //                    {
        //                        c.Entry(ctxSubEntity).State = EntityState.Deleted;
        //                    }
        //                }

        //                foreach (var subEntity in collection)
        //                {
        //                    if (!ctxCollection.Any(e => e.Id == subEntity.Id))
        //                    {
        //                        //c.Entry(subEntity).State = EntityState.Added;
        //                        ReflectionHelper.CallMethod(ctxCollection, "Add", subEntity);
        //                    }
        //                }
        //            }

        //        }
        //    }

        //}

        public virtual void Delete(T entity)
        {
            _c.Remove<T>(entity);
            //_c.Set<T>().Remove(entity);
        }

        public void Save()
        {
            _c.SaveChanges();
        }

        public void Dispose()
        {
            _c.Dispose();
        }
    }
}
