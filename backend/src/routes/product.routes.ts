import { Router } from "express";
import {
  getProducts,
  getActiveProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    deactivateProduct
} from "../controllers/product.controller.ts";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API para gestionar productos
 */

/**
 * @swagger
 * /products:
 *  get:
 *   summary: Listar todos los productos
 *  tags: [Products]
 * responses:
 *     200:
 *    description: Lista de productos obtenida correctamente
 *   content:
 *    application/json:
 *    schema:
 *    type: array
 *   items:
 *   $ref: '#/components/schemas/Product'
 *    500:
 *  description: Error del servidor
 */

router.get("/", getProducts);

/**
 * @swagger
 * /products/active:
 * get:
 * summary: Listar solo productos activos
 * tags: [Products]
 * responses:
 *  200:
 *  description: Lista de productos activos
 *  content:
 *   application/json:
 *  schema:
 *  type: array
 * items:
 * $ref: '#/components/schemas/Product'
 *    500:
 * description: Error del servidor
 */

router.get("/active", getActiveProducts);

/**
 * @swagger
 * /products/
 * {id}:
 * get:
 * summary: Obtener un producto por ID
 * tags: [Products]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * description: ID del producto
 * responses:
 *  200:
 * description: Producto obtenido correctamente
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Product'
 *  404:
 * description: Producto no encontrado
 *  500:
 * description: Error del servidor
 */
router.get("/:id", getProductById);
/**
 * @swagger
 * /products:
 * post:
 * summary: Crear un nuevo producto
 * tags: [Products]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Product'
 * responses:
 * 201:
 * description: Producto creado
 * 500:
 * description: Error del servidor
 */
router.post("/", createProduct);

/**
 * @swagger
 * /products/{id}:
 * put:
 * summary: Actualizar un producto
 * tags: [Products]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * description: ID del producto
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Product'
 * responses:
 * 200:
 * description: Producto actualizado
 * 500:
 * description: Error del servidor
 */
router.put("/:id", updateProduct);
/**
 * @swagger
 * /products/{id}:
 * delete:
 * summary: Eliminar un producto
 * tags: [Products]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * description: ID del producto
 * responses:
 * 200:
 * description: Producto eliminado
 * 500:
 * description: Error del servidor
 */
router.delete("/:id", deleteProduct);

/**
 * @swagger
 * /products/deactivate/{id}:
 * delete:
 * summary: Desactivar un producto (cambiar su estado a inactivo)
 * tags: [Products]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * description: ID del producto
 * responses:
 * 200:
 * description: Producto desactivado
 * 500:
 * description: Error del servidor
 */

router.delete("/deactivate/:id", deactivateProduct);

export default router;