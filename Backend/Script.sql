CREATE DATABASE IF NOT EXISTS `BaguerdbExample`;
USE `BaguerdbExample`;

/* 
Esta es la bd que voy ha utilizar, se que no son buenas practicas no tener la base de datos normalizada. 
Using ServerVersion '10.4.32-mariadb'.
*/
CREATE TABLE IF NOT EXISTS `User` (
    Id INT(11) NOT NULL AUTO_INCREMENT,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    CONSTRAINT PkUser PRIMARY KEY (Id)
);

CREATE TABLE IF NOT EXISTS `Empleado` (
    Id INT(11) NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(20) NOT NULL,
    Apellido VARCHAR(20) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Telefono INT(11) NULL,
    Direccion VARCHAR(100) NULL,
    Pais VARCHAR(30) NOT NULL,
    Ciudad VARCHAR(30) NULL,
    UserId INT(11) NOT NULL,
    CONSTRAINT PkEmpleado PRIMARY KEY (Id),
    CONSTRAINT FkUser FOREIGN KEY (UserId) REFERENCES User(Id) ON UPDATE cascade on DELETE no ACTION
);

CREATE TABLE IF NOT EXISTS `Imagen` (
    Id INT(11) NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(30) NULL,
    Tipo VARCHAR(30) NULL,
    Img VARCHAR(255) NULL,
    EmpleadoId INT(11) NOT NULL,
    CONSTRAINT PkImg PRIMARY KEY (Id),
    CONSTRAINT FkEmple FOREIGN KEY (EmpleadoId) REFERENCES User(Id) 
);

/* 
Informacion IMPORTANTE: Al iniciar el proyecto de insertar los roles.
 */
INSERT INTO `BaguerdbExample`.`rol` (`rolName`) VALUES
('Administrador'),
('Empleado');
