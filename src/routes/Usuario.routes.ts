import { json, request, response, Router } from 'express';
import { getManager, getRepository } from 'typeorm';
import Usuario from '../models/usuario';
import UsuarioRepository from '../repositories/UsuarioRepository';
import CreateUserService from '../Services/CreateUser';
import UsuarioController from '../Controller/UsuarioController';

const usuarioController = new UsuarioController();


const usuarioRouter = Router();

//Rota para listar todos Usuarios
usuarioRouter.get('/user', usuarioController.listandoTodosUsuarios);

//Rota para Listar Usuario unico
usuarioRouter.get('/user/:id', usuarioController.listandoUsuarioUnico);


//Rota para Criar um Usuario
usuarioRouter.post('/user', usuarioController.create);
   

//Rota para Atualizar um Usuario 
usuarioRouter.put('/user/:id',  usuarioController.AtualizandoDadosDoUsuario);


//Rota para Atualizar o status do Usuario
usuarioRouter.put('/user/usuarioStatus/:id', usuarioController.atualizandoStatusUsuario) ;


//Rota para Atualizar a senha do Usuario
usuarioRouter.put('/user/trocarSenha/:id', usuarioController.modificandoSenha);


export default usuarioRouter;
