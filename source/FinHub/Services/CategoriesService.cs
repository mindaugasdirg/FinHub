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

namespace FinHub.Services
{
    public class CategoriesService : ICategoriesService
    {
        private readonly ICategoriesRepository categoriesRepository;
        private readonly IGroupsRepository groupsRepository;
        private readonly IAuthorizationService authorizationService;

        public CategoriesService(ICategoriesRepository repository, IGroupsRepository _groupsRepository, IAuthorizationService _authorizationService)
        {
            categoriesRepository = repository;
            groupsRepository = _groupsRepository;
            authorizationService = _authorizationService;
        }

        public async Task<ServiceResult<int>> CreateAsync(ClaimsPrincipal user, int groupId, CategoryRequestModel category)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            var existing = categoriesRepository.GetCount(groupId, category.Name);
            if(existing != 0)
                return ServiceResult<int>.Error(400, "Categgory with this name already exists in this group");

            var categoryEntity = new Category()
            {
                Name = category.Name,
                Description = category.Description,
                GroupId = groupId
            };

            var result = await categoriesRepository.CreateAsync(categoryEntity);

            if(result is null)
                return ServiceResult<int>.Error(500, "Could not create category");
            return ServiceResult<int>.Success(CategoryViewModel.FromModel(result));
        }

        public async Task<ServiceResult<int>> UpdateAsync(ClaimsPrincipal user, int groupId, int categoryId, CategoryRequestModel category)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            var categoryEntity = categoriesRepository.Get(categoryId);
            if(categoryEntity is null || categoryEntity.GroupId != groupId)
                return ServiceResult<int>.Error(404, "Category was not found");

            categoryEntity.Name = category.Name;
            categoryEntity.Description = category.Description;

            var result = await categoriesRepository.UpdateAsync(categoryEntity);

            if(result is null)
                return ServiceResult<int>.Error(500, "Could not update category");
            return ServiceResult<int>.Success(CategoryViewModel.FromModel(result));
        }

        public async Task<ServiceResult<int>> DeleteAsync(ClaimsPrincipal user, int groupId, int categoryId)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Write);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");
                
            var category = categoriesRepository.Get(categoryId);

            if(category is null || category.GroupId != groupId)
                return ServiceResult<int>.Error(404, "Category was not found");

            category.Deleted = true;

            var result = await categoriesRepository.UpdateAsync(category);
            if(result is null)
                return ServiceResult<int>.Error(500, "Error deleting category");
            return ServiceResult<int>.Success(CategoryViewModel.FromModel(result));
        }

        public async Task<ServiceResult<int>> Get(ClaimsPrincipal user, int groupId, int categoryId)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Read);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            var category = categoriesRepository.Get(categoryId);

            if(category is null || category.GroupId != groupId)
                return ServiceResult<int>.Error(404, "Category was not found");
            return ServiceResult<int>.Success(CategoryViewModel.FromModel(category));
        }

        public async Task<ServiceResult<int>> GetList(ClaimsPrincipal user, int groupId)
        {
            var group = groupsRepository.Get(groupId);
            if(group is null)
                return ServiceResult<int>.Error(404, "Group was not found");

            var authorizationResult = await authorizationService.AuthorizeAsync(user, group, GroupOperations.Read);
            if(!authorizationResult.Succeeded)
                return ServiceResult<int>.Error(401, "Unauthorized");

            var result = await categoriesRepository.GetList(groupId);

            if(result is null)
                return ServiceResult<int>.Error(404, "No categories were found");
            return ServiceResult<int>.Success(result.Select(CategoryViewModel.FromModel));
        }
    }
}