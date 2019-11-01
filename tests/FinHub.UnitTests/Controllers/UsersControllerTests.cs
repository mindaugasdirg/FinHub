using System.Threading.Tasks;
using FinHub.Controllers;
using FinHub.Models;
using FinHub.Models.RequestModels;
using FinHub.Models.ViewModels;
using FinHub.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using Shouldly;

namespace FinHub.UnitTests.Controllers
{
    public class UsersControllerTests
    {
        private UsersController m_controller;
        private Mock<IUserService> m_serviceMock;

        [SetUp]
        public void Setup()
        {
            m_serviceMock = new Mock<IUserService>();
            m_controller = new UsersController(m_serviceMock.Object);
        }

        [Test]
        public async Task CreateWhenProvidedValidModelShouldReturnCreatedResult()
        {
            // Arrange
            var requestPayload = new UserRequestModel()
            {
                Username = "username",
                Email = "email"
            };
            m_serviceMock.Setup(s => s.CreateAsync(requestPayload)).Returns(Task.FromResult(ServiceResult.Success(new UserViewModel())));
            // Act
            var result = (CreatedResult)(await m_controller.CreateAsync(requestPayload));
            // Assert
            result.StatusCode.ShouldBe(201);
        }

        [Test]
        public async Task CreateWhenProvidedValidModelShouldReturnResourceLocation()
        {
            // Arrange
            var requestPayload = new UserRequestModel()
            {
                Username = "username",
                Email = "email"
            };
            m_serviceMock.Setup(s => s.CreateAsync(requestPayload)).Returns(Task.FromResult(ServiceResult.Success(new UserViewModel() { Id = 5 })));
            // Act
            var result = (CreatedResult)(await m_controller.CreateAsync(requestPayload));
            // Assert
            result.Location.ShouldBe("/users/5");
        }

        [Test]
        public async Task CreateWhenProvidedValidModelShouldReturnCreatedUser()
        {
            // Arrange
            var requestPayload = new UserRequestModel()
            {
                Username = "username",
                Email = "email"
            };
            var returnModel = new UserViewModel()
            {
                Id = 5,
                Username = "username",
                Email = "email"
            };
            m_serviceMock.Setup(s => s.CreateAsync(requestPayload)).Returns(Task.FromResult(ServiceResult.Success(returnModel)));
            // Act
            var result = (CreatedResult)(await m_controller.CreateAsync(requestPayload));
            // Assert
            result.Value.ShouldBe(returnModel);
        }
    }
}