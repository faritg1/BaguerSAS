using System;
using System.Collections.Generic;
using Domain.Entities;

namespace Domain.Entities;

public partial class Empleado : BaseEntity
{
    public string Nombre { get; set; }

    public string Apellido { get; set; }

    public string Email { get; set; }

    public int? Telefono { get; set; }

    public string Direccion { get; set; }

    public string Pais { get; set; }

    public string Ciudad { get; set; }

    public int UserId { get; set; }

    public virtual User User { get; set; }
}
