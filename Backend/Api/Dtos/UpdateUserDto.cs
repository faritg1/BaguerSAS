using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Dtos
{
    public class UpdateUserDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string NewUsername { get; set; }

        [Required]
        public string OldPassword { get; set; }

        [Required]
        public string NewPassword { get; set; }
    }
}