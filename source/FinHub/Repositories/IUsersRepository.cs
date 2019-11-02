using System.Collections.Generic;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;

namespace FinHub.Repositories
{
    public interface IUsersRepository
    {
        Task<User> Create(User user);
        Task<User> Update(User user);
        User Get(int id);
        Task<IEnumerable<User>> GetGroupList(int groupId);
        int GetGroupCount(int groupId);
        int GetCount(string username);
    }
}