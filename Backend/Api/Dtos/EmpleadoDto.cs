using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Dtos
{
    public class EmpleadoDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }

        public string Apellido { get; set; }

        public string Email { get; set; }

        public int? Telefono { get; set; }

        public string Direccion { get; set; }

        public string Pais { get; set; }

        public string Ciudad { get; set; }

        public int UserId { get; set; }
    }
}