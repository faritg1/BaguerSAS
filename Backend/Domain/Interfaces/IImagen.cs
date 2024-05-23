using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IImagen : IGenericRepository<Imagen>
    {
        Task<IEnumerable<Imagen>> GetAllImagenesAsync();
        Task<Imagen> GetImagenByIdAsync(int id);
    }
}