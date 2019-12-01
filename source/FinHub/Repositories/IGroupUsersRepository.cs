using System.Collections.Generic;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;

namespace FinHub.Repositories
{
    public interface IGroupUsersRepository
    {
        Task<GroupUser> CreateAsync(GroupUser groupUser);
        Task<GroupUser> UpdateAsync(GroupUser groupUser);
        GroupUser Get(int groupId, string userId);
        int GetCount(int groupId, string userId);
        IEnumerable<GroupUser> GetAll();
        IEnumerable<User> GetGroupUsers(int groupId);
        User GetGroupUser(int groupId, string userId);
        IEnumerable<Group> GetUserGroups(string userId);
    }
}