using FinHub.Models.ViewModels;

namespace FinHub.Models.StatsModels
{
    public abstract class IStat : IViewModel<string>
    {
        public string Id { get; set; }
    }
}