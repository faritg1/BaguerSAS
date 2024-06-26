using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IUser : IGenericRepository<User>
    {
        Task<User> GetByUsernameAsync(string username);
        Task<User> GetUser(string username);
        Task<User> GetByRefreshTokenAsync(string username);
    }
}