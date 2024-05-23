using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Dtos;

namespace Api.Services;
public interface IUserService 
{
    Task<List<UserDetailDto>> GetAllUsersAsync();
    Task<string> RegisterAsync(RegisterDto model);
    Task<DataUserDto> GetTokenAsync(LoginDto model);
    Task<string> AddRoleAsync(AddRoleDto model);
    Task<string> UpdateUserAsync(UpdateUserDto model);
    Task<DataUserDto> RefreshTokenAsync(string refreshToken);
}
