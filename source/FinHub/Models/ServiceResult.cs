using System.Collections.Generic;
using FinHub.Models.ViewModels;

namespace FinHub.Models
{
    public class ServiceResult<T>
    {
        public bool IsSuccess { get; }
        public IViewModel<T> Model { get; }
        public IEnumerable<IViewModel<T>> Models { get; }
        public int ErrorCode { get; }
        public string ErrorMessage { get; }

        private ServiceResult(IViewModel<T> model)
        {
            IsSuccess = true;
            Model = model;
        }

        private ServiceResult(IEnumerable<IViewModel<T>> models)
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

        public static ServiceResult<T> Success(IViewModel<T> model)
        {
            return new ServiceResult<T>(model);
        }

        public static ServiceResult<T> Success(IEnumerable<IViewModel<T>> models)
        {
            return new ServiceResult<T>(models);
        }

        public static ServiceResult<T> Error(int errorCode, string error)
        {
            return new ServiceResult<T>(errorCode, error);
        }
    }
}