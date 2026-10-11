import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'))

// Rotas da aplicação
app.use('/api/users', userRoutes);

export default app;