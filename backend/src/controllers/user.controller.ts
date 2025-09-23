// src/controllers/user.controller.ts
import { Request, Response } from "express";
import { UserModel, User } from "../models/user.model.ts";

// Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserModel.buscarTodosUsuarios();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un usuario por ID
export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      res.status(400).json({ message: "ID inválido" });
      return;
    }

    const user = await UserModel.buscarUsuarioPorID(id);
    if (!user || user.length === 0) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    res.status(200).json(user[0]); // devolvemos el primer resultado
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser: User = req.body;
    await UserModel.agregarUsuario(newUser);
    res.status(201).json({ message: "Usuario creado con éxito" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar usuario
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      res.status(400).json({ message: "ID inválido" });
      return;
    }

    const userData: User = { ...req.body, IdUsuario: id };
    await UserModel.modificarUsuario(userData);
    res.status(200).json({ message: "Usuario actualizado con éxito" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Desactivar usuario
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      res.status(400).json({ message: "ID inválido" });
      return;
    }

    await UserModel.desactivarUsuario(id);
    res.status(200).json({ message: "Usuario desactivado con éxito" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
