-- AGREGAR PEDIDO
DELIMITER //
CREATE PROCEDURE sp_AgregarPedido(
    IN p_IdUsuario INT,
    IN p_Total DECIMAL(10,2),
    IN p_MetodoPago VARCHAR(50)
)
BEGIN
    INSERT INTO Pedidos(IdUsuario, Total, MetodoPago)
    VALUES (p_IdUsuario, p_Total, p_MetodoPago);
END //
DELIMITER ;

-- MODIFICAR PEDIDO
DELIMITER //
CREATE PROCEDURE sp_ModificarPedido(
    IN p_IdPedido INT,
    IN p_Estado VARCHAR(50),
    IN p_MetodoPago VARCHAR(50)
)
BEGIN
    UPDATE Pedidos
    SET Estado = p_Estado,
        MetodoPago = p_MetodoPago
    WHERE IdPedido = p_IdPedido;
END //
DELIMITER ;

-- ELIMINAR PEDIDO
DELIMITER //
CREATE PROCEDURE sp_EliminarPedido(IN p_IdPedido INT)
BEGIN
    DELETE FROM Pedidos WHERE IdPedido = p_IdPedido;
END //
DELIMITER ;

-- BUSCAR POR ID
DELIMITER //
CREATE PROCEDURE sp_BuscarPedidoPorID(IN p_IdPedido INT)
BEGIN
    SELECT * FROM Pedidos WHERE IdPedido = p_IdPedido;
END //
DELIMITER ;

-- BUSCAR TODOS
DELIMITER //
CREATE PROCEDURE sp_BuscarTodosPedidos()
BEGIN
    SELECT * FROM Pedidos;
END //
DELIMITER ;
