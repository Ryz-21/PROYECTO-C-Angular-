// server.ts
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './config/swagger.ts';
import userRoutes from './routes/user.routes.ts';
import categoryRoutes from './routes/category.routes.ts';

const app = express(); 
const PORT = process.env.PORT || 3000;

// Middleware para que Express use JSON
app.use(express.json());

// Servir la documentación de Swagger en la ruta /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Usar las rutas de usuarios
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);

// Manejador de errores básico
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    console.log(`La documentación de la API está en http://localhost:${PORT}/api-docs`);
});
