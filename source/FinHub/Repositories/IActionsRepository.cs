using System.Collections.Generic;
using System.Threading.Tasks;
using FinHub.Models.EntityModels;

namespace FinHub.Repositories
{
    public interface IActionsRepository
    {
        Task<Action> CreateAsync(Action action);
        Action Get(int id);
        Task<IEnumerable<Action>> GetList(int groupId);
    }
}