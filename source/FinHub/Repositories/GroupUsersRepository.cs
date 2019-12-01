using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;
using Microsoft.EntityFrameworkCore;

namespace FinHub.Repositories
{
    public class GroupUsersRepository : IGroupUsersRepository
    {
        private readonly DatabaseContext dbContext;

        public GroupUsersRepository(DatabaseContext context)
        {
            dbContext = context;
        }

        public async Task<GroupUser> CreateAsync(GroupUser groupUser)
        {
            var createdGroupUser = dbContext.GroupUsers.Add(groupUser);
            if((await dbContext.SaveChangesAsync()) > 0)
                return createdGroupUser.Entity;
            return null;
        }

        public async Task<GroupUser> UpdateAsync(GroupUser groupUser)
        {
            var createdGroupUser = dbContext.GroupUsers.Update(groupUser);
            if((await dbContext.SaveChangesAsync()) > 0)
                return createdGroupUser.Entity;
            return null;
        }

        public GroupUser Get(int groupId, string userId)
        {
            return dbContext.GroupUsers.Where(g => g.GroupId == groupId && g.UserId == userId).FirstOrDefault();
        }

        public int GetCount(int groupId, string userId)
        {
            return dbContext.GroupUsers.Where(g => g.GroupId == groupId && g.UserId == userId).Count();
        }

        public IEnumerable<GroupUser> GetAll()
        {
            return dbContext.GroupUsers.ToList();
        }

        public IEnumerable<User> GetGroupUsers(int groupId)
        {
            return dbContext.GroupUsers
                .Include(g => g.User)
                .Where(g => g.GroupId == groupId)
                .Select(g => g.User)
                .ToList();
        }

        public User GetGroupUser(int groupId, string userId)
        {
            return dbContext.GroupUsers
                .Include(g => g.User)
                .Where(g => g.GroupId == groupId && g.UserId == userId)
                .Select(g => g.User)
                .FirstOrDefault();
        }

        public IEnumerable<Group> GetUserGroups(string userId)
        {
            return dbContext.GroupUsers
                .Include(g => g.Group)
                .Where(g => g.UserId == userId)
                .Select(g => g.Group)
                .ToList();
        }
    }
}