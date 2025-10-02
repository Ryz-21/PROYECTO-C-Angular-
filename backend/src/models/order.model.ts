import pool from "../config/db.ts";

export interface Order {
    IdPedido?: number;
    IdCliente: number;
    Fecha: Date;//----
    Total: number;
    Estado?: string; //---
    metodosPago?: string;
}

export class OrderModel {
    // Listar todas
    static async getAll() {
        const [rows] = await pool.query("CALL sp_BuscarTodosPedidos()");
        return (rows as any)[0];
    }
    // Buscar por ID
    static async getById(IdPedido: number) {
        const [rows] = await pool.query("CALL sp_BuscarPedidoPorID(?)", [IdPedido]);
        return (rows as any)[0][0];
    }
    // Crear pedido
    static async create(order: Order) {
        const { IdCliente, Fecha, Total, Estado = 'Pendiente', metodosPago = 'No especificado' } = order; // Por defecto pendiente
        const [rows] = await pool.query("CALL sp_AgregarPedido(?, ?, ?, ?, ?)", [IdCliente, Fecha, Total, Estado, metodosPago]);
        return rows;
    }
    // Modificar pedido
    static async update(IdPedido: number, order: Order) {
        const { IdCliente, Fecha, Total, Estado = 'Pendiente', metodosPago = 'No especificado' } = order;
        const [rows] = await pool.query("CALL sp_ModificarPedido(?, ?, ?, ?, ?, ?)", [IdPedido, IdCliente, Fecha, Total, Estado, metodosPago]);
        return rows;
    }
    // Eliminar pedido
    static async delete(IdPedido: number) {
        const [rows] = await pool.query("CALL sp_EliminarPedido(?)", [IdPedido]);
        return rows;
    }
   // Desactivar pedido
    static async deactivate(IdPedido: number) {
        const [rows] = await pool.query("CALL sp_DesactivarPedido(?)", [IdPedido]);
        return rows;
    }
}