using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Dtos;
using AutoMapper;
using Domain.Entities;

namespace Api.Profiles
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles(){
            CreateMap<Empleado, EmpleadoDto>().ReverseMap();
            CreateMap<Imagen, ImagenDto>().ReverseMap();
            CreateMap<ImagenDto, Imagen>().ReverseMap();
        }
    }
}