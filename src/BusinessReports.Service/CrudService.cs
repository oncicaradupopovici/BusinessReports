using BusinessReports.Data.Contracts;
using BusinessReports.Entity;
using BusinessReports.Service.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BusinessReports.Service
{
    internal class CrudService<T> : ICrudService<T> where T : IdEntity, new()
    {
        protected IRepo<T> repo;

        public CrudService(IRepo<T> repo)
        {
            this.repo = repo;
        }

        //public bool AutoDetectChangesEnabled
        //{
        //    set
        //    {
        //        repo.AutoDetectChangesEnabled = value;
        //    }
        //}

        public T Get(int id)
        {
            return repo.Get(id);
        }

        public virtual IEnumerable<T> GetAll()
        {
            return repo.GetAll();
        }

        public virtual IEnumerable<T> Where(Expression<Func<T, bool>> predicate)
        {
            return repo.Where(predicate);
        }

        public virtual int Create(T e, bool save = true)
        {
            var a = repo.Insert(e);
            if (save)
                Save();

            return a.Id;
        }

        public void CreateBulk(IEnumerable<T> entities)
        {
            repo.InsertBulk(entities);
        }

        public void Update(T entity)
        {
            repo.Update(entity);
        }

        public virtual void Delete(int id, bool save = true)
        {
            repo.Delete(repo.Get(id));

            if (save)
                Save();
        }

        public void Save()
        {
            repo.Save();
            OnAfterRepoSave();
        }

        public void Dispose()
        {
            repo.Dispose();
        }

        protected virtual void OnAfterRepoSave()
        {

        }

        //public IEnumerable<T> DynamicWhere(string where, Dictionary<string, object> parameters)
        //{
        //    return repo.DynamicWhere(where, parameters);
        //}

        //public IEnumerable<IDataRecord> DynamicQuery(string select, string where, string groupBy, Dictionary<string, object> parameters)
        //{
        //    return repo.DynamicQuery(select, where, groupBy, parameters);
        //}



        //public void UpdateGraph(T entity, IEnumerable<string> navigationProperties = null)
        //{
        //    repo.UpdateGraph(entity, navigationProperties);
        //}

    }
}
