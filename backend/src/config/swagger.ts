// src/config/swagger.ts
import swaggerJSDoc from "swagger-jsdoc";

//definicion de las opciones para swagger
const options = {
  definition: {
    openapi: "3.0.0", // Version de OpenAPI
    info: { // Información básica sobre la API
      title: "APIS", // Título de la API
      version: "1.0.0", // Versión de la API
      description: "Documentación de las APIs", // Descripción de la API
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      schemas: {
        Category: { // Definición del esquema Category
          type: "object",
          properties: {
            IdCategoria: { type: "integer", example: 1 }, // Ejemplo de IdCategoria
            Nombre: { type: "string", example: "Pollo entero" }, // Ejemplo de Nombre
            Descripcion: { type: "string", example: "Categoría de productos" },// Ejemplo de Descripcion
            Estado: { type: "integer", example: 1, description: "1=activo, 0=inactivo" }// Ejemplo de Estado
          },
          required: ["Nombre"]// Nombre es obligatorio
        },
        User: {
          type: "object",
          properties: {
            IdUsuario: { type: "integer", example: 1 },// Ejemplo de IdUsuario
            Nombre: { type: "string", example: "Juan" },// Ejemplo de Nombre
            Apellido: { type: "string", example: "Pérez" },// Ejemplo de Apellido
            Email: { type: "string", example: "juanperez@mail.com" },// Ejemplo de Email
            Estado: { type: "integer", example: 1, description: "1=activo, 0=inactivo" }// Ejemplo de Estado
          },
          required: ["Nombre", "Apellido", "Email"]// Nombre, Apellido y Email son obligatorios
        },
        NewUser: {// Definición del esquema NewUser
          type: "object",
          properties: {
            Nombre: { type: "string", example: "Juan" },// Ejemplo de Nombre
            Apellido: { type: "string", example: "Pérez" },// Ejemplo de Apellido
            Email: { type: "string", example: "juanperez@mail.com" },// Ejemplo de Email
            Clave: { type: "string", example: "123456" }// Ejemplo de Clave
          },
          required: ["Nombre", "Apellido", "Email", "Clave"]// Todos son obligatorios
        },
        UpdateUser: {// Definición del esquema UpdateUser
          type: "object",// Tipo de dato objeto
          properties: {// Propiedades del objeto
            Nombre: { type: "string", example: "Juan actualizado" },// Ejemplo de Nombre
            Apellido: { type: "string", example: "Pérez" },// Ejemplo de Apellido
            Email: { type: "string", example: "juanperez_updated@mail.com" },// Ejemplo de Email
            Estado: { type: "integer", example: 1 }// Ejemplo de Estado
          }
        }
      }
    }
  },
  apis: ["./src/routes/*.ts"]
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
