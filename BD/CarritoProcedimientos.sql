-- AGREGAR AL CARRITO
DELIMITER //
CREATE PROCEDURE sp_AgregarCarrito(
    IN p_IdUsuario INT,
    IN p_IdProducto INT,
    IN p_Cantidad INT
)
BEGIN
    INSERT INTO Carrito(IdUsuario, IdProducto, Cantidad)
    VALUES (p_IdUsuario, p_IdProducto, p_Cantidad);
END //
DELIMITER ;

-- MODIFICAR CARRITO
DELIMITER //
CREATE PROCEDURE sp_ModificarCarrito(
    IN p_IdCarrito INT,
    IN p_Cantidad INT
)
BEGIN
    UPDATE Carrito
    SET Cantidad = p_Cantidad
    WHERE IdCarrito = p_IdCarrito;
END //
DELIMITER ;

-- ELIMINAR DEL CARRITO
DELIMITER //
CREATE PROCEDURE sp_EliminarCarrito(IN p_IdCarrito INT)
BEGIN
    DELETE FROM Carrito WHERE IdCarrito = p_IdCarrito;
END //
DELIMITER ;

-- BUSCAR POR ID
DELIMITER //
CREATE PROCEDURE sp_BuscarCarritoPorID(IN p_IdCarrito INT)
BEGIN
    SELECT * FROM Carrito WHERE IdCarrito = p_IdCarrito;
END //
DELIMITER ;

-- BUSCAR TODOS
DELIMITER //
CREATE PROCEDURE sp_BuscarTodosCarritos()
BEGIN
    SELECT * FROM Carrito;
END //
DELIMITER ;
