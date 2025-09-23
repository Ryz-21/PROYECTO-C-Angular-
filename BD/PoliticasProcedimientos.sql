-- AGREGAR POLITICA
DELIMITER //
CREATE PROCEDURE sp_AgregarPolitica(
    IN p_Titulo VARCHAR(200),
    IN p_Contenido TEXT
)
BEGIN
    INSERT INTO Politicas(Titulo, Contenido)
    VALUES (p_Titulo, p_Contenido);
END //
DELIMITER ;

-- MODIFICAR POLITICA
DELIMITER //
CREATE PROCEDURE sp_ModificarPolitica(
    IN p_IdPolitica INT,
    IN p_Titulo VARCHAR(200),
    IN p_Contenido TEXT
)
BEGIN
    UPDATE Politicas
    SET Titulo = p_Titulo,
        Contenido = p_Contenido
    WHERE IdPolitica = p_IdPolitica;
END //
DELIMITER ;

-- ELIMINAR POLITICA
DELIMITER //
CREATE PROCEDURE sp_EliminarPolitica(IN p_IdPolitica INT)
BEGIN
    DELETE FROM Politicas WHERE IdPolitica = p_IdPolitica;
END //
DELIMITER ;

-- BUSCAR POR ID
DELIMITER //
CREATE PROCEDURE sp_BuscarPoliticaPorID(IN p_IdPolitica INT)
BEGIN
    SELECT * FROM Politicas WHERE IdPolitica = p_IdPolitica;
END //
DELIMITER ;

-- BUSCAR TODOS
DELIMITER //
CREATE PROCEDURE sp_BuscarTodasPoliticas()
BEGIN
    SELECT * FROM Politicas;
END //
DELIMITER ;
