using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Data.Configuration
{
    public class ImagenConfiguration : IEntityTypeConfiguration<Imagen>
    {
        public void Configure(EntityTypeBuilder<Imagen> entity)
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("imagen");

            entity.HasIndex(e => e.EmpleadoId, "FkEmple");

            entity.Property(e => e.Id).HasColumnType("int(11)");
            entity.Property(e => e.EmpleadoId).HasColumnType("int(11)");
            entity.Property(e => e.Img).HasMaxLength(255);
            entity.Property(e => e.Nombre).HasMaxLength(30);
            entity.Property(e => e.Tipo).HasMaxLength(30);

            entity.HasOne(d => d.Empleado).WithMany(p => p.Imagens)
                .HasForeignKey(d => d.EmpleadoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FkEmple");
        }
    }
}