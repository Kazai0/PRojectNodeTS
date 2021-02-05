import { Router } from 'express';
import usuarioRouter from './Usuario.routes';



const routes = Router();

routes.use('/usuarios', usuarioRouter)

export default routes;