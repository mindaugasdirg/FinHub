using FinHub.Models.EntityModels;

namespace FinHub.Models.StatsModels
{
    public class CategoryAmountStat : AmountStat
    {
        public Category Category { get; set; }
    }
}