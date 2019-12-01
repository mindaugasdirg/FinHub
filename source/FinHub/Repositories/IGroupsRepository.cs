using System.Collections.Generic;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;

namespace FinHub.Repositories
{
    public interface IGroupsRepository
    {
        Task<Group> CreateAsync(Group group);
        Task<Group> UpdateAsync(Group group);
        Group Get(int id);
        Group Get(string code);
        int GetGroupsCount(string name);
    }
}