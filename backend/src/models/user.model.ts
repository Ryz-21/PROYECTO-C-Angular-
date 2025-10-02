// src/models/user.model.ts
import pool from "../config/db.ts";

// Definimos la interfaz de Usuario
export interface User {
  IdUsuario?: number; // Opcional para crear nuevos usuarios
  Nombre: string;
  Apellido: string;
  Email: string;
  Clave: string;
  ProveedorLogin?: string; // Opcional, puede ser 'DESACTIVADO'
}

export class UserModel {
  // Agregar un nuevo usuario
  static async agregarUsuario(user: User) {
    const { Nombre, Apellido, Email, Clave, ProveedorLogin } = user;
    const [rows] = await pool.query(
      "CALL sp_AgregarUsuario(?, ?, ?, ?, ?)",
      [Nombre, Apellido, Email, Clave, ProveedorLogin ?? ""]
    );
    return rows;
  }

  // Modificar un usuario existente
  static async modificarUsuario(user: User) {
    if (!user.IdUsuario) throw new Error("El IdUsuario es obligatorio");
    const { IdUsuario, Nombre, Apellido, Email, Clave } = user;
    const [rows] = await pool.query(
      "CALL sp_ModificarUsuario(?, ?, ?, ?, ?)",
      [IdUsuario, Nombre, Apellido, Email, Clave]
    );
    return rows;
  }

  // Desactivar un usuario
  static async desactivarUsuario(IdUsuario: number) {
    const [rows] = await pool.query(
      "CALL sp_DesactivarUsuario(?)",
      [IdUsuario]
    );
    return rows;
  }

  // Eliminar un usuario
  static async eliminarUsuario(IdUsuario: number) {
    const [rows] = await pool.query(
      "CALL sp_EliminarUsuario(?)",
      [IdUsuario]
    );
    return rows;
  }

  // Buscar un usuario por ID
  static async buscarUsuarioPorID(IdUsuario: number) {
    const [rows] = await pool.query(
      "CALL sp_BuscarUsuarioPorID(?)",
      [IdUsuario]
    );
    return (rows as any)[0]; // sp devuelve un array dentro de otro array
  }

  // Buscar todos los usuarios
  static async buscarTodosUsuarios() {
    const [rows] = await pool.query("CALL sp_BuscarTodosUsuarios()");
    return (rows as any)[0]; // sp devuelve un array dentro de otro array
  }
}
