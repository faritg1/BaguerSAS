using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Interfaces;
using Persistence.Data;

namespace App.Repositories
{
    public class UserRepository : GenericRepository<User>, IUser
    {
        public UserRepository(BaguerContext context) : base(context)
        {
        }
    }
}