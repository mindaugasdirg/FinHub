using FinHub.Models.EntityModels;

namespace FinHub.Models.StatsModels
{
    public class UserAmount : IStat
    {
        public User User { get; set; }
        public decimal Amount { get; set; }
    }
}