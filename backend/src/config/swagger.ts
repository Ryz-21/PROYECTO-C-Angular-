// src/config/swagger.ts
import swaggerJSDoc from "swagger-jsdoc";

// Configuración de swagger-jsdoc
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Usuarios",
      version: "1.0.0",
      description: "Documentación de la API de usuarios",
    },
    servers: [
      { url: "http://localhost:3000" }
    ]
  },
  // Archivos donde buscar los comentarios @swagger
  apis: ["./src/routes/*.ts"] // aquí busca todos los .ts dentro de routes
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
