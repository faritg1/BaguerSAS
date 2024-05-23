using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.Repositories;
using Domain.Interfaces;
using Persistence.Data;

namespace App.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly BaguerContext _context;
        public UnitOfWork(BaguerContext context)
        {
            _context = context;
        }
        private IEmpleado _empleados;

        private IImagen _imagenes;

        private IUser _users;
        private IRol _roles;


        public IEmpleado Empleados 
        {
        get
            {
                if (_empleados == null)
                {
                    _empleados = new EmpleadoRepository(_context);
                }
                return _empleados;
            }
        }
        public IImagen Imagenes 
        {
        get
            {
                if (_imagenes == null)
                {
                    _imagenes = new ImagenRepository(_context);
                }
                return _imagenes;
            }
        }
        public IUser Users 
        {
        get
            {
                if (_users == null)
                {
                    _users = new UserRepository(_context);
                }
                return _users;
            }
        }

        public IRol Roles 
        {
        get
            {
                if (_roles == null)
                {
                    _roles = new RolRepository(_context);
                }
                return _roles;
            }
        }

        public Task<int> SaveAsync()
        {
            return _context.SaveChangesAsync();
        }
        public void Dispose()
        {
            _context.Dispose();
        }
    }
}