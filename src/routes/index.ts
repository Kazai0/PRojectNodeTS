import { Router } from 'express';
import usuarioRouter from './Usuario.routes';



const routes = Router();



routes.use('/users', usuarioRouter);

export default routes;