using FinHub.Models.ViewModels;

namespace FinHub.Models.StatsModels
{
    public class UserAmountStat : AmountStat
    {
        public UserViewModel User { get; set; }
    }
}