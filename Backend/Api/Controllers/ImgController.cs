using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Dtos;
using Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class ImgController : BaseController
    {
        private readonly IImgService _imagenService;

        public ImgController(IImgService imagenService)
        {
            _imagenService = imagenService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ImagenDto>>> GetAllImagenes()
        {
            var imagenes = await _imagenService.GetAllImagenesAsync();
            return Ok(imagenes);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ImagenDto>> GetImagenById(int id)
        {
            var imagen = await _imagenService.GetImagenByIdAsync(id);
            if (imagen == null) return NotFound();
            return Ok(imagen);
        }

        [HttpPost]
        public async Task<ActionResult> AddImagen(IFormFile file,int empId)
        {
            if (file == null || file.Length == 0) return BadRequest("No file uploaded.");

            using var ms = new MemoryStream();
            await file.CopyToAsync(ms);
            var fileBytes = ms.ToArray();

            if (fileBytes.Length > (64 * 1024 * 1024))
                return BadRequest("File size exceeds the limit.");

            var imagenDto = new ImagenDto
            {
                Nombre = file.FileName,
                Tipo = file.ContentType,
                Img = Convert.ToBase64String(fileBytes),
                EmpId = empId
            };

            await _imagenService.AddImagenAsync(imagenDto);

            return Ok("Image uploaded successfully.");
        }
    }
}