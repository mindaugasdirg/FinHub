using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;
using Microsoft.EntityFrameworkCore;

namespace FinHub.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly DatabaseContext dbContext;

        public UsersRepository(DatabaseContext context)
        {
            dbContext = context;
        }

        public async Task<User> Create(User user)
        {
            var addedUser = dbContext.Users.Add(user);
            if(await dbContext.SaveChangesAsync() > 0)
                return addedUser.Entity;
            return null;
        }

        public async Task<User> Update(User user)
        {
            var updatedUser = dbContext.Users.Update(user);
            if(await dbContext.SaveChangesAsync() > 0)
                return updatedUser.Entity;
            return null;
        }

        public User Get(int id)
        {
            return dbContext.Users.Where(u => u.Id == id).FirstOrDefault();
        }

        public async Task<IEnumerable<User>> GetGroupList(int groupId)
        {
            return await GetUsersList(groupId).ToListAsync();
        }

        public int GetGroupCount(int groupId)
        {
            return GetUsersList(groupId).Count();
        }

        public int GetCount(string username)
        {
            return dbContext.Users
                .Where(u => u.Username.Equals(username))
                .Count();
        }

        private IQueryable<User> GetUsersList(int groupId)
        {
            return dbContext.GroupUsers
                .Include(g => g.User)
                .Where(g => g.GroupId == groupId)
                .Select(g => g.User);
        }
    }
}