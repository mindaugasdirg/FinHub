using System.Collections.Generic;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;

namespace FinHub.Repositories
{
    public interface ICategoriesRepository
    {
        Task<Category> CreateAsync(Category category);
        Task<Category> UpdateAsync(Category category);
        Category Get(int id);
        Task<IEnumerable<Category>> GetList(int groupId);
        int GetCount(int groupId, string name);
    }
}