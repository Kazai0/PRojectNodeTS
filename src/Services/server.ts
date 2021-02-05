import 'reflect-metadata';

import express from 'express';
import usuarioRouter from '../routes/Usuario.routes'
import '../database'

const app = express();

app.use(express.json());
app.use(usuarioRouter);

app.listen(8080, () =>{
    console.log("Deus é bom");
});