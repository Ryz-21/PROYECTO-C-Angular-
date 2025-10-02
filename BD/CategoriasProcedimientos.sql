-- AGREGAR CATEGORIA
DELIMITER //
CREATE PROCEDURE sp_AgregarCategoria(
    IN p_Nombre VARCHAR(100),
    IN p_Descripcion VARCHAR(255)
)
BEGIN
    INSERT INTO Categorias(Nombre, Descripcion)
    VALUES (p_Nombre, p_Descripcion);
END //
DELIMITER ;

-- MODIFICAR CATEGORIA
DELIMITER //
CREATE PROCEDURE sp_ModificarCategoria(
    IN p_IdCategoria INT,
    IN p_Nombre VARCHAR(100),
    IN p_Descripcion VARCHAR(255)
)
BEGIN
    UPDATE Categorias
    SET Nombre = p_Nombre,
        Descripcion = p_Descripcion
    WHERE IdCategoria = p_IdCategoria;
END //
DELIMITER ;

-- ELIMINAR CATEGORIA
DELIMITER //
CREATE PROCEDURE sp_EliminarCategoria(IN p_IdCategoria INT)
BEGIN
    DELETE FROM Categorias WHERE IdCategoria = p_IdCategoria;
END //
DELIMITER ;

-- BUSCAR POR ID
DELIMITER //
CREATE PROCEDURE sp_BuscarCategoriaPorID(IN p_IdCategoria INT)
BEGIN
    SELECT * FROM Categorias WHERE IdCategoria = p_IdCategoria;
END //
DELIMITER ;

-- BUSCAR TODOS
DELIMITER //
CREATE PROCEDURE sp_BuscarTodasCategorias()
BEGIN
    SELECT * FROM Categorias;
END //
DELIMITER ;

--- ALTER TABLE Categorias ADD Estado TINYINT(1) DEFAULT 1;

--desactivar categoria 
DELIMITER //
CREATE PROCEDURE sp_DesactivarCategoria(IN p_IdCategoria INT)
BEGIN
    UPDATE Categorias
    SET Estado = 0
    WHERE IdCategoria = p_IdCategoria;
END //
DELIMITER ;
--DELIMITER //

--listar solo activas xd 
CREATE PROCEDURE sp_BuscarCategoriasActivas()
BEGIN
    SELECT * FROM Categorias WHERE Estado = 1;
END //
DELIMITER ;
