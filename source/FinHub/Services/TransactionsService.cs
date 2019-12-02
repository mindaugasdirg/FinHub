using System.Linq;
using System.Threading.Tasks;
using FinHub.Models;
using FinHub.Models.EntityModels;
using FinHub.Models.EditModels;
using FinHub.Models.ViewModels;
using FinHub.Repositories;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using FinHub.Authorization;
using Microsoft.AspNetCore.Identity;

namespace FinHub.Services
{
    public class TransactionsService : ITransactionsService
    {
        private readonly ITransactionsRepository transactionsRepository;
        private readonly IGroupsRepository groupsRepository;
        private readonly IAuthorizationService authorizationService;
        private readonly IActionsService actionService;
        private readonly UserManager<User> usersManager;

        public TransactionsService(ITransactionsRepository repository, IGroupsRepository _groupsRepository,
            IAuthorizationService _authorizationService, UserManager<User> _usersManager, IActionsService _actionService)
        {
            transactionsRepository = repository;
            groupsRepository = _groupsRepository;
            authorizationService = _authorizationService;
            usersManager = _usersManager;
            actionService = _actionService;
        }

        public async Task<ServiceResult<int>> CreateAsync(int groupId, ClaimsPrincipal user, TransactionRequestModel transaction)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Read);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            var authenticatedUser = await usersManager.GetUserAsync(user);
                
            var transactionEntity = new Transaction()
            {
                Amount = transaction.Amount,
                Description = transaction.Description,
                CategoryId = transaction.CategoryId,
                UserId = authenticatedUser.Id,
                GroupId = groupId
            };

            var result = await transactionsRepository.CreateAsync(transactionEntity);

            if(result is null)
                return ServiceResult<int>.Error(500, "Could not create transaction");

            await actionService.CreateAsync(group.Id, authenticatedUser.Id, "Transaction", $"{authenticatedUser.UserName} has added transaction");
            return ServiceResult<int>.Success(TransactionViewModel.FromModel(result));
        }

        public async Task<ServiceResult<int>> UpdateAsync(ClaimsPrincipal user, int groupId, int transactionId, TransactionRequestModel transaction)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            var transactionEntity = transactionsRepository.Get(transactionId);
            if(transactionEntity is null || transactionEntity.GroupId != groupId)
                return ServiceResult<int>.Error(404, "Transaction was not found");

            transactionEntity.Amount = transaction.Amount;
            transactionEntity.Description = transaction.Description;
            transactionEntity.CategoryId = transaction.CategoryId;

            var result = await transactionsRepository.UpdateAsync(transactionEntity);

            if(result is null)
                return ServiceResult<int>.Error(500, "Could not update transaction");
            return ServiceResult<int>.Success(TransactionViewModel.FromModel(result));
        }

        public async Task<ServiceResult<int>> DeleteAsync(ClaimsPrincipal user, int groupId, int transactionId)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");
                
            var transaction = transactionsRepository.Get(transactionId);

            if(transaction is null || transaction.GroupId != groupId)
                return ServiceResult<int>.Error(404, "Transaction was not found");

            transaction.Deleted = true;

            var result = await transactionsRepository.UpdateAsync(transaction);
            if(result is null)
                return ServiceResult<int>.Error(500, "Error deleting transaction");
            return ServiceResult<int>.Success(TransactionViewModel.FromModel(result));
        }

        public async Task<ServiceResult<int>> Get(ClaimsPrincipal user, int groupId, int transactionId)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Read);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            var transaction = transactionsRepository.Get(transactionId);

            if(transaction is null || transaction.GroupId != groupId)
                return ServiceResult<int>.Error(404, "Transaction was not found");
            return ServiceResult<int>.Success(TransactionViewModel.FromModel(transaction));
        }

        public async Task<ServiceResult<int>> GetList(ClaimsPrincipal user, int groupId)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Read);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            var result = await transactionsRepository.GetList(groupId);

            if(result is null)
                return ServiceResult<int>.Error(404, "No transactions were found");
            return ServiceResult<int>.Success(result.Select(TransactionViewModel.FromModel));
        }
    }
}