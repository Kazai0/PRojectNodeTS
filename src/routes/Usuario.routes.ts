import {Router} from 'express';
import {getCustomRepository} from 'typeorm';
import Usuario from '../models/usuario';
import UsuarioRepository from '../repositories/UsuarioRepository';




const usuarioRouter = Router();

const usuarioRepository = new UsuarioRepository();

//usuarioRouter.get('/', (request, response )=>{
//    return response.json({message:'Hello God'})
//});


usuarioRouter.get('/', (request, response)=>{
    const usuarioRepository = getCustomRepository(UsuarioRepository);
    const usuarios = usuarioRepository.find();
    
    return response.json(usuarios);
});


usuarioRouter.post('/', (request, response) =>{
 
})





export default usuarioRouter;
