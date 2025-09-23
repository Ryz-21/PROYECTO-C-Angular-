import pool from "../config/db.ts";

export interface Categoria {
  IdCategoria?: number;
  Nombre: string;
  Descripcion?: string;
  Estado?: number;
}

export class CategoryModel {
  // Listar todas
  static async getAll() {
    const [rows] = await pool.query("CALL sp_BuscarTodasCategorias()");
    return (rows as any)[0];
  }

  // Listar solo activas
  static async getActive() {
    const [rows] = await pool.query("CALL sp_BuscarCategoriasActivas()");
    return (rows as any)[0];
  }

  // Buscar por ID
  static async getById(IdCategoria: number) {
    const [rows] = await pool.query("CALL sp_BuscarCategoriaPorID(?)", [IdCategoria]);
    return (rows as any)[0][0];
  }

 // Crear categoría
static async create(categoria: Categoria) {
  const { Nombre, Descripcion, Estado = 1 } = categoria; // Por defecto activa
  const [rows] = await pool.query("CALL sp_AgregarCategoria(?, ?, ?)", [Nombre, Descripcion, Estado]);
  return rows;
}

// Modificar categoría
static async update(IdCategoria: number, categoria: Categoria) {
  const { Nombre, Descripcion, Estado = 1 } = categoria;
  const [rows] = await pool.query("CALL sp_ModificarCategoria(?, ?, ?, ?)", [IdCategoria, Nombre, Descripcion, Estado]);
  return rows;
}


  // Eliminar categoría
  static async delete(IdCategoria: number) {
    const [rows] = await pool.query("CALL sp_EliminarCategoria(?)", [IdCategoria]);
    return rows;
  }

  // Desactivar categoría
  static async deactivate(IdCategoria: number) {
    const [rows] = await pool.query("CALL sp_DesactivarCategoria(?)", [IdCategoria]);
    return rows;
  }
}
