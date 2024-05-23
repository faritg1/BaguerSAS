using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Data.Configuration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> entity)
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("user");

            entity.Property(e => e.Id).HasColumnType("int(11)");
            entity.Property(e => e.Password)
                .IsRequired()
                .HasMaxLength(255);
            entity.Property(e => e.Username)
                .IsRequired()
                .HasMaxLength(50);
                
            entity
            .HasMany(p => p.Rols)
            .WithMany(r => r.Users)
            .UsingEntity<UserRol>(

                j => j
                .HasOne(pt => pt.Rol)
                .WithMany(t => t.UsersRols)
                .HasForeignKey(ut => ut.RolId),

                j => j
                .HasOne(et => et.Usuario)
                .WithMany(et => et.UsersRols)
                .HasForeignKey(el => el.UsuarioId),

                j =>
                {
                    j.ToTable("userRol");
                    j.HasKey(t => new { t.UsuarioId, t.RolId });

                });

            entity.HasMany(p => p.RefreshTokens)
            .WithOne(p => p.User)
            .HasForeignKey(p => p.UserId);
        }
    }
}

