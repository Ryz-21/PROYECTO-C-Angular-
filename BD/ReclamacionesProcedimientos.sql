-- AGREGAR RECLAMACION
DELIMITER //
CREATE PROCEDURE sp_AgregarReclamacion(
    IN p_IdUsuario INT,
    IN p_Descripcion TEXT
)
BEGIN
    INSERT INTO Reclamaciones(IdUsuario, Descripcion)
    VALUES (p_IdUsuario, p_Descripcion);
END //
DELIMITER ;

-- MODIFICAR RECLAMACION
DELIMITER //
CREATE PROCEDURE sp_ModificarReclamacion(
    IN p_IdReclamo INT,
    IN p_Descripcion TEXT,
    IN p_Estado VARCHAR(50)
)
BEGIN
    UPDATE Reclamaciones
    SET Descripcion = p_Descripcion,
        Estado = p_Estado
    WHERE IdReclamo = p_IdReclamo;
END //
DELIMITER ;

-- ELIMINAR RECLAMACION
DELIMITER //
CREATE PROCEDURE sp_EliminarReclamacion(IN p_IdReclamo INT)
BEGIN
    DELETE FROM Reclamaciones WHERE IdReclamo = p_IdReclamo;
END //
DELIMITER ;

-- BUSCAR POR ID
DELIMITER //
CREATE PROCEDURE sp_BuscarReclamacionPorID(IN p_IdReclamo INT)
BEGIN
    SELECT * FROM Reclamaciones WHERE IdReclamo = p_IdReclamo;
END //
DELIMITER ;

-- BUSCAR TODOS
DELIMITER //
CREATE PROCEDURE sp_BuscarTodasReclamaciones()
BEGIN
    SELECT * FROM Reclamaciones;
END //
DELIMITER ;
