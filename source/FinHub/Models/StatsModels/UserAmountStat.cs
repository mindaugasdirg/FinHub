using FinHub.Models.EntityModels;

namespace FinHub.Models.StatsModels
{
    public class UserAmountStat : AmountStat
    {
        public User User { get; set; }
    }
}