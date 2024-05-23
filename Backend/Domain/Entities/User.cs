using System;
using System.Collections.Generic;
using Domain.Entities;

namespace Domain.Entities;

public partial class User : BaseEntity
{
    public string Username { get; set; }

    public string Password { get; set; }

    public virtual ICollection<Empleado> Empleados { get; set; } = new List<Empleado>();
    public ICollection<Rol> Rols { get; set; } = new HashSet<Rol>();
    public ICollection<RefreshToken> RefreshTokens { get; set; } = new HashSet<RefreshToken>();
    public ICollection<UserRol> UsersRols { get; set; }
}
