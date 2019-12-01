using System.Linq;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;
using Microsoft.EntityFrameworkCore;

namespace FinHub.Repositories
{
    public class GroupsRepository : IGroupsRepository
    {
        private readonly DatabaseContext dbContext;

        public GroupsRepository(DatabaseContext context)
        {
            dbContext = context;
        }

        public async Task<Group> CreateAsync(Group group)
        {
            var createdGroup = dbContext.Groups.Add(group);
            if((await dbContext.SaveChangesAsync()) > 0)
                return createdGroup.Entity;
            return null;
        }

        public async Task<Group> UpdateAsync(Group group)
        {
            var updatedGroup = dbContext.Groups.Update(group);
            if(await dbContext.SaveChangesAsync() > 0)
                return updatedGroup.Entity;
            return null;
        }

        public Group Get(int id)
        {
            return dbContext.Groups
                .Include(g => g.Admin)
                .Include(g => g.GroupUsers)
                .Where(g => g.Id == id).FirstOrDefault();
        }

        public Group Get(string code)
        {
            return dbContext.Groups
                .Include(g => g.Admin)
                .Where(g => g.GroupCode == code).FirstOrDefault();
        }

        public int GetGroupsCount(string name)
        {
            return dbContext.Groups
                .Where(g => g.Name.Equals(name))
                .Count();
        }
    }
}