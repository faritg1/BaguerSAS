# Proyecto ASP.NET Core 4 Capas

Este es un proyecto de ejemplo construido con ASP.NET Core siguiendo una arquitectura de 4 capas. El proyecto incluye funcionalidades como autenticación JWT, manejo de usuarios y roles, y la capacidad de subir y almacenar imágenes.

## Estructura del Proyecto

El proyecto está dividido en las siguientes capas:

1. **API**: Maneja las solicitudes de los clientes.
2. **App**: Contiene la lógica de la aplicación y la inyección de dependencias.
3. **Domain**: Define las entidades y las interfaces del dominio.
4. **Persistence**: Maneja la conexión a la base de datos y los repositorios.

## Requisitos

- .NET 7 SDK 
- MySQL (u otro servidor de base de datos compatible)
- Visual Studio Code

### 1. Clonar el Repositorio

```bash
git clone https://github.com/faritg1/BaguerSAS.git
```

## Configurar la Base de Datos
- Asegúrate de que tienes una base de datos MySQL configurada y actualiza la cadena de conexión en appsettings.json:

- "ConnectionStrings": {
-     "MySqlConex": "server=localhost;user=root;password='';database=BaguerdbExample;"
- }

## Realizar la migracion la base de datos:
- dotnet ef migrations add InitialCreate -p Persistence -s Api -o Data/Migrations

## Realizar la actualizacio la base de datos:
- dotnet ef database update --project ./Persistence/ --startup-project ./Api/

## Insertar Roles: 
- INSERT INTO `BaguerdbExample`.`rol` (`rolName`) VALUES
- ('Administrador'),
- ('Empleado');

## Ejecutar del servidor
- dotnet watch --project Api/

