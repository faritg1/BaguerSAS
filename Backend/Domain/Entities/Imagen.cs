using System;
using System.Collections.Generic;
using Domain.Entities;

namespace Domain.Entities;

public partial class Imagen : BaseEntity
{
    public string Nombre { get; set; }

    public string Tipo { get; set; }

    public string Img { get; set; }

    public int EmpleadoId { get; set; }

    public virtual Empleado Empleado { get; set; }
}
