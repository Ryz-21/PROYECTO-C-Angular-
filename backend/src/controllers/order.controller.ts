import { Request, Response } from 'express';
import { OrderModel, Order } from '../models/order.model.ts';

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await OrderModel.getAll();
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener órdenes' });
    }
};
export const getOrderById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const order = await OrderModel.getById(Number(id));
        if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al buscar orden' });
    }
};
export const createOrder = async (req: Request, res: Response) => {
    try {
        const order: Order = req.body;
        await OrderModel.create(order);
        res.status(201).json({ message: 'Orden creada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear orden' });
    }
};
export const updateOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const order: Order = req.body;
        await OrderModel.update(Number(id), order);
        res.json({ message: 'Orden actualizada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar orden' });
    }
};
export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await OrderModel.delete(Number(id));
        res.json({ message: 'Orden eliminada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar orden' });
    }
};
export const deactivateOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await OrderModel.deactivate(Number(id));
        res.json({ message: 'Orden desactivada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al desactivar orden' });
    }
};