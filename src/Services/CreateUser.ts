import UsuarioRepository from '../repositories/UsuarioRepository';
import {getCustomRepository} from 'typeorm';
import Usuario from '../models/usuario';

interface RequestStatus{
    StatusUsuario: string;
}

interface Request {
    id: string;
    email: string;
    nome: string;
    senha: string;
    statusUsuario:string;

}

class CreateUserService{
    public async execute({id, email,nome,senha,statusUsuario}: Request):Promise<Usuario>{
        const usuarioRepository = getCustomRepository(UsuarioRepository);
        
        const checkUserExist = await usuarioRepository.findOne({
            where:{email},
        });

        if(checkUserExist){
            throw new Error('Email addres already used');

        }

        const usuario = usuarioRepository.create({
            id,
            email,
            nome,
            senha,
            statusUsuario,
            
        });

        await usuarioRepository.save(usuario);

        return usuario;
    }

}





export default CreateUserService;