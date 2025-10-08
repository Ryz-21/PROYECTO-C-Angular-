//src/routes/order.routes.ts
import { Router } from 'express';
import { getOrders, getOrderById, createOrder, updateOrder, deleteOrder, deactivateOrder } from '../controllers/order.controller.ts';
const router = Router();


/** 
 * @swagger
 * tags:
 *   name: Orders
 *   description: API para gestionar órdenes
 */

/**
 * @swagger
 * /orders:
 *   get:
 *    summary: Listar todas las órdenes
 *   tags: [Orders]
 *  responses:
 *      200:
 *       description: Lista de órdenes obtenida correctamente
 *      content:
 *        application/json:
 *         schema:
 *          type: array
 *         items:
 *          $ref: '#/components/schemas/Order'
 *     500:
 *    description: Error del servidor
 */
router.get('/', getOrders);

/**
 * @swagger
 * /orders/{id}:
 *  get:
 *   summary: Obtener una orden por ID
 *  tags: [Orders]
 *  parameters:
 *    - in: path
 *     name: id
 *    required: true
 *    schema:
 *     type: integer
 *    description: ID de la orden
 *  responses:
 *    200:
 *    description: Orden obtenida correctamente
 *   content:
 *    application/json:
 *    schema:
 *    $ref: '#/components/schemas/Order'
 *   404:
 *   description: Orden no encontrada
 *  500:
 *  description: Error del servidor
 */

router.get('/:id', getOrderById);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Crear una nueva orden   
 *    tags: [Orders]
 *    requestBody:
 *    required: true
 *   content:
 *    application/json:
 *    schema:
 *    $ref: '#/components/schemas/Order'
 *  responses:
 *   201:
 *    description: Orden creada correctamente
 *  500:
 *   description: Error del servidor
 */
router.post('/', createOrder);

/**
 * @swagger
 * /orders/{id}:
 *  put:
 *  summary: Actualizar una orden por ID
 * tags: [Orders]
 * parameters:
 *  - in: path
 *   name: id
 *  required: true
 *  schema:
 *   type: integer
 *  description: ID de la orden
 * requestBody:
 * required: true
 * content:
 *  application/json:
 *  schema:
 *  $ref: '#/components/schemas/Order'
 * responses:
 * 200:
 * description: Orden actualizada correctamente
 * 500:
 * description: Error del servidor
 */
router.put('/:id', updateOrder);

/**
 * @swagger
 * /orders/{id}:
 *  delete:
 *  summary: Eliminar una orden por ID
 * tags: [Orders]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * description: ID de la orden
 * responses:
 * 200:
 * description: Orden eliminada correctamente
 * 500:
 * description: Error del servidor
 */

router.delete('/:id', deleteOrder);
/**
 * @swagger
 * /orders/{id}/deactivate:
 *  put:
 *  summary: Desactivar una orden por ID
 * tags: [Orders]
 * parameters:
 * - in: path
 *  name: id
 *  required: true
 * schema:
 * type: integer
 * description: ID de la orden
 * responses:
 * 200:
 * description: Orden desactivada correctamente
 * 500:
 * description: Error del servidor
 */
router.put('/:id/deactivate', deactivateOrder);

export default router;