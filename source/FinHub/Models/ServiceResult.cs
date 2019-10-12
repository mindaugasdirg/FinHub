using System.Collections.Generic;
using FinHub.Models.ViewModels;

namespace FinHub.Models
{
    public class ServiceResult
    {
        public bool IsSuccess { get; }
        public IViewModel Model { get; }
        public IEnumerable<IViewModel> Models { get; }
        public int ErrorCode { get; }
        public string ErrorMessage { get; }

        private ServiceResult(IViewModel model)
        {
            IsSuccess = true;
            Model = model;
        }

        private ServiceResult(IEnumerable<IViewModel> models)
        {
            IsSuccess = true;
            Models = models;
        }

        private ServiceResult(int errorCode, string error)
        {
            IsSuccess = false;
            ErrorCode = errorCode;
            ErrorMessage = error;
        }

        public static ServiceResult Success(IViewModel model)
        {
            return new ServiceResult(model);
        }

        public static ServiceResult Success(IEnumerable<IViewModel> models)
        {
            return new ServiceResult(models);
        }

        public static ServiceResult Error(int errorCode, string error)
        {
            return new ServiceResult(errorCode, error);
        }
    }
}