using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;
using Microsoft.EntityFrameworkCore;

namespace FinHub.Repositories
{
    public class ActionsRepository : IActionsRepository
    {
        private readonly DatabaseContext dbContext;

        public ActionsRepository(DatabaseContext context)
        {
            dbContext = context;
        }

        public async Task<Action> CreateAsync(Action action)
        {
            var createdAction = dbContext.Actions.Add(action);

            if((await dbContext.SaveChangesAsync()) > 0)
                return createdAction.Entity;
            return null;
        }

        public Action Get(int id)
        {
            return dbContext.Actions
                .Include(t => t.Group)
                .Include(t => t.User)
                .Where(c => c.Id == id).FirstOrDefault();
        }

        public async Task<IEnumerable<Action>> GetList(int groupId)
        {
            return await dbContext.Actions
                .Include(t => t.Group)
                .Include(t => t.User)
                .Where(c => c.GroupId == groupId).ToListAsync();
        }
    }
}