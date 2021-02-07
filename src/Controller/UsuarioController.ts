import {Request, Response} from 'express';
import { getManager, getRepository } from 'typeorm';
import CreateUserService, {} from '../Services/CreateUser';
import Usuario from '../models/usuario'

export default class UsuarioController{

    //Método para listar todos Usuarios
    public async listandoTodosUsuarios (request: Request, response: Response): Promise<Response>{
       
        const usuarioRepository = getRepository(Usuario);

        const usuarios = await usuarioRepository.find();

        return response.json(usuarios);
    }

    //Método para listar um Usuario único
    public async listandoUsuarioUnico(request:Request, response: Response): Promise<Response>{
       
        const usuarioRepository = getRepository(Usuario);
        
        const usuarios = await usuarioRepository.findOne(request.params.id);
        
        return response.json(usuarios);

    }

    //Método para Criar Usuarios
    public async create(request: Request, response: Response): Promise<Response>{

        try {

            //desistruturação para o objeto request através do corpo json
            const { id, email, nome, senha, statusUsuario } = request.body;
    
            //Instanciação do objeto para a classe Create...
            const createUser = new CreateUserService();
    
            //Utilização do método execute da classe 
            const usuario = await createUser.execute({
                id,
                email,
                nome,
                senha,
                statusUsuario,
            });
    
           
            return response.json(usuario);
    
        } catch (err) {
            return response.status(400).json({ error: err.message });
    
        }
    
    }

    //Método para Atualizar dados dos Usuarios
    public async AtualizandoDadosDoUsuario(request: Request, response: Response){
        
        try {
    
            //criação de um repo apartir da class model
            const usuarioRepository = getManager().getRepository(Usuario);
            //Instânciação do objeto
            const usuario = new Usuario();
    
            //Settando obeto usuario com valor json da requisição
    
            usuario.email = request.body.email;
            usuario.nome = request.body.nome;
            usuario.senha = request.body.senha;
            usuario.statusUsuario = request.body.statusUsuario;
    
            //Método update para atualizar os dados do objeto apartir do parâmetro da url
            await usuarioRepository.update(
                request.params.id,
                usuario,
            );
    
            const updatedContact = await usuarioRepository.findOne(request.params.contactId);
    
            //Método para salvar a atualização no banco de dados
            await usuarioRepository.save(usuario);
    
    
            //Resposta do json mostrando o usuario cadastrado.
            response.send(usuario);
    
        } catch (err) {
    
            response.send(err);
    
        
        }
    
        }


    //Método para modificar senha do Usuario
    public async modificandoSenha (request: Request, response: Response){

        try {

            //criação de um repo apartir da class model
            const usuarioRepository = getManager().getRepository(Usuario);
            //Instânciação do objeto
            const usuario = new Usuario();
    
            //Settando obeto usuario com valor json da requisição
    
            
            usuario.senha = request.body.senha;
    
            //Método update para atualizar os dados do objeto apartir do parâmetro da url
            await usuarioRepository.update(
                request.params.id,
                usuario,
            );
    
            const updatedContact = await usuarioRepository.findOne(request.params.contactId);
    
            //Método para salvar a atualização no banco de dados
            await usuarioRepository.save(usuario);
    
    
            //Resposta do json mostrando o usuario cadastrado.
            response.send(usuario);
    
        } catch (err) {
    
            response.send(err);
    
        }
    
        
    }

    //Método para Atualizar status do Usuario
    public async atualizandoStatusUsuario(request: Request, response: Response){
        try {

            //criação de um repo apartir da class model
            const usuarioRepository = getManager().getRepository(Usuario);
            //Instânciação do objeto
            const usuario = new Usuario();
    
            //Settando obeto usuario com valor json da requisição
    
            
            usuario.statusUsuario = request.body.statusUsuario;
    
            //Método update para atualizar os dados do objeto apartir do parâmetro da url
            await usuarioRepository.update(
                request.params.id,
                usuario,
            );
    
            const updatedContact = await usuarioRepository.findOne(request.params.contactId);
    
            //Método para salvar a atualização no banco de dados
            await usuarioRepository.save(usuario);
    
    
            //Resposta do json mostrando o usuario cadastrado.
            response.send(usuario);
    
        } catch (err) {
    
            response.send(err);
    
        }
    
    }
}


