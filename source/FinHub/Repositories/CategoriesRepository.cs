using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;
using Microsoft.EntityFrameworkCore;

namespace FinHub.Repositories
{
    public class CategoriesRepository : ICategoriesRepository
    {
        private readonly DatabaseContext dbContext;

        public CategoriesRepository(DatabaseContext context)
        {
            dbContext = context;
        }

        public async Task<Category> CreateAsync(Category category)
        {
            var createdCategory = dbContext.Categories.Add(category);

            if((await dbContext.SaveChangesAsync()) > 0)
                return createdCategory.Entity;
            return null;
        }

        public async Task<Category> UpdateAsync(Category category)
        {
            var updatedCategory = dbContext.Categories.Update(category);

            if((await dbContext.SaveChangesAsync()) > 0)
                return updatedCategory.Entity;
            return null;
        }

        public Category Get(int id)
        {
            return dbContext.Categories.Where(c => c.Id == id).FirstOrDefault();
        }

        public async Task<IEnumerable<Category>> GetList(int groupId)
        {
            return await dbContext.Categories.Where(c => c.GroupId == groupId).ToListAsync();
        }

        public int GetCount(int groupId, string name)
        {
            return dbContext.Categories.Where(c => c.Name.Equals(name)).Count();
        }
    }
}