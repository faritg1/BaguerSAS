using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Dtos;

namespace Api.Services
{
    public interface IImgService
    {
        Task<IEnumerable<ImagenDto>> GetAllImagenesAsync();
        Task<ImagenDto> GetImagenByIdAsync(int id);
        Task AddImagenAsync(ImagenDto imagenDto);
    }
}