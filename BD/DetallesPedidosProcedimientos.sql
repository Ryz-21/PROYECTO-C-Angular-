-- AGREGAR DETALLE
DELIMITER //
CREATE PROCEDURE sp_AgregarDetallePedido(
    IN p_IdPedido INT,
    IN p_IdProducto INT,
    IN p_Cantidad INT,
    IN p_PrecioUnitario DECIMAL(10,2)
)
BEGIN
    INSERT INTO DetallesPedido(IdPedido, IdProducto, Cantidad, PrecioUnitario)
    VALUES (p_IdPedido, p_IdProducto, p_Cantidad, p_PrecioUnitario);
END //
DELIMITER ;

-- MODIFICAR DETALLE
DELIMITER //
CREATE PROCEDURE sp_ModificarDetallePedido(
    IN p_IdDetalle INT,
    IN p_Cantidad INT,
    IN p_PrecioUnitario DECIMAL(10,2)
)
BEGIN
    UPDATE DetallesPedido
    SET Cantidad = p_Cantidad,
        PrecioUnitario = p_PrecioUnitario
    WHERE IdDetalle = p_IdDetalle;
END //
DELIMITER ;

-- ELIMINAR DETALLE
DELIMITER //
CREATE PROCEDURE sp_EliminarDetallePedido(IN p_IdDetalle INT)
BEGIN
    DELETE FROM DetallesPedido WHERE IdDetalle = p_IdDetalle;
END //
DELIMITER ;

-- BUSCAR POR ID
DELIMITER //
CREATE PROCEDURE sp_BuscarDetallePorID(IN p_IdDetalle INT)
BEGIN
    SELECT * FROM DetallesPedido WHERE IdDetalle = p_IdDetalle;
END //
DELIMITER ;

-- BUSCAR TODOS
DELIMITER //
CREATE PROCEDURE sp_BuscarTodosDetalles()
BEGIN
    SELECT * FROM DetallesPedido;
END //
DELIMITER ;
