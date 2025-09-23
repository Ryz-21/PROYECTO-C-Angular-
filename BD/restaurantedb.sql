CREATE DATABASE restaurantedb;
USE restaurantedb;

CREATE TABLE Categorias (
    IdCategoria INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL, -- Ej: Promociones, Brasas, Piqueos, Parrillas
    Descripcion VARCHAR(255)
);

-- =============================
-- TABLA USUARIOS
-- =============================
CREATE TABLE Usuarios (
    IdUsuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Email VARCHAR(150) UNIQUE NOT NULL,
    Clave VARCHAR(255) NOT NULL,  -- encriptada
    ProveedorLogin VARCHAR(50) DEFAULT 'LOCAL', -- LOCAL | GOOGLE | FACEBOOK
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================
-- TABLA PRODUCTOS
-- =============================
CREATE TABLE Productos (
    IdProducto INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(150) NOT NULL,
    Descripcion TEXT,
    Precio DECIMAL(10,2) NOT NULL,
    Imagen VARCHAR(255),
    IdCategoria INT NOT NULL,
    Estado TINYINT(1) DEFAULT 1, -- Activo/Inactivo
    FOREIGN KEY (IdCategoria) REFERENCES Categorias(IdCategoria)
);

-- =============================
-- TABLA CARRITO
-- =============================
CREATE TABLE Carrito (
    IdCarrito INT AUTO_INCREMENT PRIMARY KEY,
    IdUsuario INT NOT NULL,
    IdProducto INT NOT NULL,
    Cantidad INT NOT NULL DEFAULT 1,
    FechaAgregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario),
    FOREIGN KEY (IdProducto) REFERENCES Productos(IdProducto)
);

-- =============================
-- TABLA PEDIDOS
-- =============================
CREATE TABLE Pedidos (
    IdPedido INT AUTO_INCREMENT PRIMARY KEY,
    IdUsuario INT NOT NULL,
    FechaPedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Estado VARCHAR(50) DEFAULT 'PENDIENTE', -- PENDIENTE | PAGADO | ENVIADO | ENTREGADO
    Total DECIMAL(10,2) NOT NULL,
    MetodoPago VARCHAR(50), -- VISA | MASTERCARD | YAPE
    FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario)
);

-- =============================
-- TABLA DETALLES PEDIDO
-- =============================
CREATE TABLE DetallesPedido (
    IdDetalle INT AUTO_INCREMENT PRIMARY KEY,
    IdPedido INT NOT NULL,
    IdProducto INT NOT NULL,
    Cantidad INT NOT NULL,
    PrecioUnitario DECIMAL(10,2) NOT NULL,
    Subtotal DECIMAL(10,2) GENERATED ALWAYS AS (Cantidad * PrecioUnitario) STORED,
    FOREIGN KEY (IdPedido) REFERENCES Pedidos(IdPedido),
    FOREIGN KEY (IdProducto) REFERENCES Productos(IdProducto)
);

-- =============================
-- TABLA POLITICAS Y TERMINOS
-- =============================
CREATE TABLE Politicas (
    IdPolitica INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(200) NOT NULL,
    Contenido TEXT NOT NULL,
    FechaPublicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================
-- TABLA RECLAMACIONES
-- =============================
CREATE TABLE Reclamaciones (
    IdReclamo INT AUTO_INCREMENT PRIMARY KEY,
    IdUsuario INT NOT NULL,
    Descripcion TEXT NOT NULL,
    FechaReclamo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Estado VARCHAR(50) DEFAULT 'ABIERTO', -- ABIERTO | EN PROCESO | CERRADO
    FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario)
);