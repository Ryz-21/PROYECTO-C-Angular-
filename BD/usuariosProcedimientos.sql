-- AGREGAR USUARIO
DELIMITER //
CREATE PROCEDURE sp_AgregarUsuario(
    IN p_Nombre VARCHAR(100),
    IN p_Apellido VARCHAR(100),
    IN p_Email VARCHAR(150),
    IN p_Clave VARCHAR(255),
    IN p_ProveedorLogin VARCHAR(50)
)
BEGIN
    INSERT INTO Usuarios(Nombre, Apellido, Email, Clave, ProveedorLogin)
    VALUES (p_Nombre, p_Apellido, p_Email, p_Clave, p_ProveedorLogin);
END //
DELIMITER ;

-- MODIFICAR USUARIO
DELIMITER //
CREATE PROCEDURE sp_ModificarUsuario(
    IN p_IdUsuario INT,
    IN p_Nombre VARCHAR(100),
    IN p_Apellido VARCHAR(100),
    IN p_Email VARCHAR(150),
    IN p_Clave VARCHAR(255)
)
BEGIN
    UPDATE Usuarios
    SET Nombre = p_Nombre,
        Apellido = p_Apellido,
        Email = p_Email,
        Clave = p_Clave
    WHERE IdUsuario = p_IdUsuario;
END //
DELIMITER ;

-- DESACTIVAR USUARIO
DELIMITER //
CREATE PROCEDURE sp_DesactivarUsuario(IN p_IdUsuario INT)
BEGIN
    UPDATE Usuarios
    SET ProveedorLogin = 'DESACTIVADO'
    WHERE IdUsuario = p_IdUsuario;
END //
DELIMITER ;

-- ELIMINAR USUARIO
DELIMITER //
CREATE PROCEDURE sp_EliminarUsuario(IN p_IdUsuario INT)
BEGIN
    DELETE FROM Usuarios WHERE IdUsuario = p_IdUsuario;
END //
DELIMITER ;

-- BUSCAR POR ID
DELIMITER //
CREATE PROCEDURE sp_BuscarUsuarioPorID(IN p_IdUsuario INT)
BEGIN
    SELECT * FROM Usuarios WHERE IdUsuario = p_IdUsuario;
END //
DELIMITER ;

-- BUSCAR TODOS
DELIMITER //
CREATE PROCEDURE sp_BuscarTodosUsuarios()
BEGIN
    SELECT * FROM Usuarios;
END //
DELIMITER ;
