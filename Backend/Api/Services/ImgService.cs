using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Dtos;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;

namespace Api.Services
{
    public class ImgService : IImgService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;


        public ImgService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ImagenDto>> GetAllImagenesAsync()
        {
            var imagenes = await _unitOfWork.Imagenes.GetAllImagenesAsync();
            var imagenDtos = imagenes.Select(imagen => new ImagenDto
            {
                Id = imagen.Id,
                Nombre = imagen.Nombre,
                Tipo = imagen.Tipo,
                Img = imagen.Img,
                EmpId = imagen.EmpleadoId
            }).ToList();

            return imagenDtos;
        }

        public async Task<ImagenDto> GetImagenByIdAsync(int id)
        {
            var imagen = await _unitOfWork.Imagenes.GetImagenByIdAsync(id);
            if (imagen == null) return null;

            return new ImagenDto
            {
                Id = imagen.Id,
                Nombre = imagen.Nombre,
                Tipo = imagen.Tipo,
                Img = imagen.Img,
                EmpId = imagen.EmpleadoId
            };
        }

        public async Task AddImagenAsync(ImagenDto imagenDto)
        {
            var imagen = _mapper.Map<Imagen>(imagenDto);
            _unitOfWork.Imagenes.Add(imagen);
            await _unitOfWork.SaveAsync();
        }
    }
}