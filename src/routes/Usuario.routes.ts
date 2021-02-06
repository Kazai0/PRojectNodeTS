import {json, request, response, Router} from 'express';
import {getManager, getRepository} from 'typeorm';
import Usuario from '../models/usuario';
import UsuarioRepository from '../repositories/UsuarioRepository';
import CreateUserService from '../Services/CreateUser'


const usuarioRouter = Router();


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
});



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

//atualizando dados do usuario
usuarioRouter.put('/user/:id', async (request, response)=>{
    const usuarioRepository = getRepository(Usuario);

    const usuarios  = await usuarioRepository.findOne(request.params.id);


        try {
    
          const usuarioRepository = getManager().getRepository(Usuario);
          const usuario = new Usuario();
          
         usuario.email = request.body.email;
         usuario.nome = request.body.nome;
         usuario.senha = request.body.senha;
         usuario.statusUsuario = request.body.statusUsuario;

          await usuarioRepository.update(
            request.params.id ,
            usuario,
            

          );
    
          const updatedContact = await usuarioRepository.findOne(request.params.contactId);
    
          await usuarioRepository.save(usuario);

          console.log(usuarios);

          response.send(usuario);
    
        } catch(err) {
    
          response.send(err);
    
        }
      
    
   




});

export default usuarioRouter;
