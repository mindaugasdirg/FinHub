namespace FinHub.Models.ViewModels
{
    public interface IViewModel<T>
    {
        T Id { get; set; }
    }
}