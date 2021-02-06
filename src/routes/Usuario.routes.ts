import {json, request, response, Router} from 'express';
import {getRepository} from 'typeorm';
import Usuario from '../models/usuario';
import UsuarioRepository from '../repositories/UsuarioRepository';
import CreateUserService from '../Services/CreateUser'


const usuarioRouter = Router();

//const usuarioRepository = new UsuarioRepository();

//usuarioRouter.get('/', (request, response )=>{
//    return response.json({message:'Hello God'})
//});

//listando todos usuarios
usuarioRouter.get('/user', async (request, response)=>{

    const usuarioRepository = getRepository(Usuario);
    const usuarios  = await usuarioRepository.find();
    

    console.log(usuarios);
    return response.json(usuarios);
});

//listando usuarioUnico
usuarioRouter.get('/user/:id', async (request, response)=>{
    const usuarioRepository = getRepository(Usuario);
    const usuarios  = await usuarioRepository.findOne(request.params.id);
    return response.json(usuarios);
})

usuarioRouter.put('/user/:id', async (request, response)=>{
    const usuarioRepository = getRepository(Usuario);
    const usuarios  = await usuarioRepository.findOne(request.params.id);

    try{
    const {id,email, nome, senha, statusUsuario} = request.body;

    const createUser = new CreateUserService();

    const usuario = await createUser.execute({
        id,
        email,
        nome,
        senha,
        statusUsuario,
    });

    return response.json(usuario);

}catch(err){
    return response.status(400).json({error: err.message});
    
}
    


})

//adiciona um usuario novo
usuarioRouter.post('/user',async (request, response) =>{
  try{

    const {id, email, nome, senha, statusUsuario} = request.body;
    
    const createUser = new CreateUserService();

    const usuario = await createUser.execute({
        id,
        email,
        nome,
        senha,
        statusUsuario,
    });

    return response.json(usuario);

}catch(err){
    return response.status(400).json({error: err.message});
    
}




 
});

export default usuarioRouter;
