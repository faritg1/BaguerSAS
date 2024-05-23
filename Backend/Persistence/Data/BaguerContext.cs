using System;
using System.Collections.Generic;
using System.Reflection;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Data;

public partial class BaguerContext : DbContext
{
    public BaguerContext(DbContextOptions<BaguerContext> options): base(options)
    {
    }
    public virtual DbSet<Empleado> Empleados { get; set; }
    public virtual DbSet<Imagen> Imagens { get; set; }
    public virtual DbSet<User> Users { get; set; }
    public virtual DbSet<Rol> Rols { get; set; }
    public virtual DbSet<UserRol> UsersRols { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}
