import pool from "../config/db.ts";

export interface Producto {
  IdProducto?: number;
  Nombre: string;
  Descripcion?: string;
  Precio: number;
  Stock: number;
  IdCategoria: number;
  Estado?: number;
}
export class ProductModel {
  // Listar todos
  static async getAll() {
    const [rows] = await pool.query("CALL sp_BuscarTodosProductos()");
    return (rows as any)[0];
  }
    // Listar solo activos
    static async getActive() {
      const [rows] = await pool.query("CALL sp_BuscarProductosActivos()");
      return (rows as any)[0];
    }
    // Buscar por ID
    static async getById(IdProducto: number) {
      const [rows] = await pool.query("CALL sp_BuscarProductoPorID(?)", [IdProducto]);
      return (rows as any)[0][0];
    }
    // Crear producto
    static async create(producto: Producto) {
      const { Nombre, Descripcion, Precio, Stock, IdCategoria, Estado = 1 } = producto; // Por defecto activo
      const [rows] = await pool.query("CALL sp_AgregarProducto(?, ?, ?, ?, ?, ?)", [Nombre, Descripcion, Precio, Stock, IdCategoria, Estado]);
      return rows;
    }
    // Modificar producto
    static async update(IdProducto: number, producto: Producto) {
        const { Nombre, Descripcion, Precio, Stock, IdCategoria, Estado = 1 } = producto;
        const [rows] = await pool.query("CALL sp_ModificarProducto(?, ?, ?, ?, ?, ?, ?)", [IdProducto, Nombre, Descripcion, Precio, Stock, IdCategoria, Estado]);
        return rows;
    }
    // desactivar producto
    static async deactivate(IdProducto: number) {
      const [rows] = await pool.query("CALL sp_DesactivarProducto(?)", [IdProducto]);
      return rows;
    }
    // Eliminar producto
    static async delete(IdProducto: number) {
      const [rows] = await pool.query("CALL sp_EliminarProducto(?)", [IdProducto]);
      return rows;
    }
    }