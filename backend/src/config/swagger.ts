// src/config/swagger.ts
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "APIS",
      version: "1.0.0",
      description: "Documentación de las APIs",
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      schemas: {
        Category: {
          type: "object",
          properties: {
            IdCategoria: { type: "integer", example: 1 },
            Nombre: { type: "string", example: "Pollo entero" },
            Descripcion: { type: "string", example: "Categoría de productos" },
            Estado: { type: "integer", example: 1, description: "1=activo, 0=inactivo" }
          },
          required: ["Nombre"]
        },
        User: {
          type: "object",
          properties: {
            IdUsuario: { type: "integer", example: 1 },
            Nombre: { type: "string", example: "Juan" },
            Apellido: { type: "string", example: "Pérez" },
            Email: { type: "string", example: "juanperez@mail.com" },
            Estado: { type: "integer", example: 1, description: "1=activo, 0=inactivo" }
          },
          required: ["Nombre", "Apellido", "Email"]
        },
        NewUser: {
          type: "object",
          properties: {
            Nombre: { type: "string", example: "Juan" },
            Apellido: { type: "string", example: "Pérez" },
            Email: { type: "string", example: "juanperez@mail.com" },
            Clave: { type: "string", example: "123456" }
          },
          required: ["Nombre", "Apellido", "Email", "Clave"]
        },
        UpdateUser: {
          type: "object",
          properties: {
            Nombre: { type: "string", example: "Juan actualizado" },
            Apellido: { type: "string", example: "Pérez" },
            Email: { type: "string", example: "juanperez_updated@mail.com" },
            Estado: { type: "integer", example: 1 }
          }
        }
      }
    }
  },
  apis: ["./src/routes/*.ts"]
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
