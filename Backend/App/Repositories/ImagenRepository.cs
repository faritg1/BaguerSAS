using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Persistence.Data;

namespace App.Repositories
{
    public class ImagenRepository : GenericRepository<Imagen>, IImagen
    {
        private readonly BaguerContext _context;
        public ImagenRepository(BaguerContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Imagen>> GetAllImagenesAsync()
        {
            return await _context.Imagens.ToListAsync();
        }

        public async Task<Imagen> GetImagenByIdAsync(int id)
        {
            return await _context.Imagens.FindAsync(id);
        }
    }
}