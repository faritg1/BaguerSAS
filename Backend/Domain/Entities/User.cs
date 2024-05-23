using System;
using System.Collections.Generic;
using Domain.Entities;

namespace Domain.Entities;

public partial class User : BaseEntity
{
    public string Username { get; set; }

    public string Password { get; set; }

    public virtual ICollection<Empleado> Empleados { get; set; } = new List<Empleado>();

    public virtual ICollection<Imagen> Imagens { get; set; } = new List<Imagen>();
}
