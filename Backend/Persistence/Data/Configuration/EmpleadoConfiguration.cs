using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Data.Configuration
{
    public class EmpleadoConfiguration : IEntityTypeConfiguration<Empleado>
    {
        public void Configure(EntityTypeBuilder<Empleado> entity)
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("empleado");

            entity.HasIndex(e => e.UserId, "FkUser");

            entity.Property(e => e.Id).HasColumnType("int(11)");
            entity.Property(e => e.Apellido)
                .IsRequired()
                .HasMaxLength(20);
            entity.Property(e => e.Ciudad).HasMaxLength(30);
            entity.Property(e => e.Direccion).HasMaxLength(100);
            entity.Property(e => e.Email)
                .IsRequired()
                .HasMaxLength(100);
            entity.Property(e => e.Nombre)
                .IsRequired()
                .HasMaxLength(20);
            entity.Property(e => e.Pais)
                .IsRequired()
                .HasMaxLength(30);
            entity.Property(e => e.Telefono).HasColumnType("int(11)");
            entity.Property(e => e.UserId).HasColumnType("int(11)");

            entity.HasOne(d => d.User).WithMany(p => p.Empleados)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FkUser");
        }
    }
}