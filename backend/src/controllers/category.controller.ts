import { Request, Response } from "express";
import { CategoryModel, Categoria } from "../models/category.model.ts";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.getAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener categorías" });
  }
};

export const getActiveCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.getActive();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener categorías activas" });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.getById(Number(id));
    if (!category) return res.status(404).json({ message: "Categoría no encontrada" });
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al buscar categoría" });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const categoria: Categoria = req.body;
    await CategoryModel.create(categoria);
    res.status(201).json({ message: "Categoría creada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear categoría" });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const categoria: Categoria = req.body;
    await CategoryModel.update(Number(id), categoria);
    res.json({ message: "Categoría actualizada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar categoría" });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await CategoryModel.delete(Number(id));
    res.json({ message: "Categoría eliminada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar categoría" });
  }
};

export const deactivateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await CategoryModel.deactivate(Number(id));
    res.json({ message: "Categoría desactivada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al desactivar categoría" });
  }
};
