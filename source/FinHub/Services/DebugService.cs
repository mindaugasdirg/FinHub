using System.Linq;
using System.Threading.Tasks;

namespace FinHub.Services
{
    public class DebugService
    {
        private readonly DatabaseContext dbContext;

        public DebugService(DatabaseContext context)
        {
            dbContext = context;
        }

        public object GetTable(string table)
        {
            switch(table.ToLower())
            {
                case "actions":
                    return dbContext.Actions.ToList();
                case "categories":
                    return dbContext.Categories.ToList();
                case "groups":
                    return dbContext.Groups.ToList();
                case "groupusers":
                    return dbContext.GroupUsers.ToList();
                case "transactions":
                    return dbContext.Transactions.ToList();
                case "users":
                    return dbContext.Users.ToList();
                default:
                    return null;
            }
        }

        public async Task<object> ClearData()
        {
            dbContext.Actions.RemoveRange(dbContext.Actions.ToList());
            dbContext.Categories.RemoveRange(dbContext.Categories.ToList());
            dbContext.Groups.RemoveRange(dbContext.Groups.ToList());
            dbContext.GroupUsers.RemoveRange(dbContext.GroupUsers.ToList());
            dbContext.Transactions.RemoveRange(dbContext.Transactions.ToList());
            dbContext.Users.RemoveRange(dbContext.Users.ToList());
            return await dbContext.SaveChangesAsync();
        }
    }
}