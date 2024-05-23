using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Dtos
{
    public class UserDetailDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public List<RolDto> Roles { get; set; }
    }
}