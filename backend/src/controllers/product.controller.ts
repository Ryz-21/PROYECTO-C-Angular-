import { Request, Response } from "express";
import { ProductModel, Producto } from "../models/product.model.ts";
import { CategoryModel } from "../models/category.model.ts";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.getAll();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener productos" });
    }
};
export const getActiveProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.getActive();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener productos activos" });
    }
};
export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.getById(Number(id));
        if (!product) return res.status(404).json({ message: "Producto no encontrado" });
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al buscar producto" });
    }
};
export const createProduct = async (req: Request, res: Response) => {
    try {
        const producto: Producto = req.body;
        await ProductModel.create(producto);
        res.status(201).json({ message: "Producto creado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear producto" });
    }
}
export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const producto: Producto = req.body;
        await CategoryModel.update(producto.IdCategoria, { Nombre: "", Descripcion: "", Estado: 1 });
        await ProductModel.update(Number(id), producto);
        res.json({ message: "Producto actualizado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar producto" });
    }
}
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await ProductModel.delete(Number(id));
        res.json({ message: "Producto eliminado" });
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar producto" });
    }
};

export const deactivateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await ProductModel.deactivate(Number(id));
        res.json({ message: "Producto desactivado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al desactivar producto" });
    }
};