using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Persistence.Data;

namespace App.Repositories
{
    public class UserRepository : GenericRepository<User>, IUser
    {
        private readonly BaguerContext _context;
        public UserRepository(BaguerContext context) : base(context)
        {
            _context = context;
        }

        public async Task<User> GetByRefreshTokenAsync(string refreshToken)
        {
            return await _context.Users
                .Include(u => u.Rols)
                .Include(u => u.RefreshTokens)
                .FirstOrDefaultAsync(u => u.RefreshTokens.Any(t => t.Token == refreshToken));
        }

        public async Task<User> GetByUsernameAsync(string username)
        {
            return await _context.Users
                .Include(u => u.Rols)
                .Include(u => u.RefreshTokens)
                .FirstOrDefaultAsync(u => u.Username.ToLower() == username.ToLower());
        }
        public async Task<User> GetUser(string username)
        {
            return await _context.Users
                .Include(u => u.Rols)
                .FirstOrDefaultAsync(u => u.Username.ToLower() == username.ToLower());
        }

        public override async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _context.Users
            .Include(u => u.Rols)
            .ToListAsync();
        }

    }
}