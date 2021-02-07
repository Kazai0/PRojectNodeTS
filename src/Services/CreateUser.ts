import UsuarioRepository from '../repositories/UsuarioRepository';
import {getCustomRepository} from 'typeorm';
import Usuario from '../models/usuario';

import {hash} from 'bcryptjs';


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
        
        //Criação de uma variavel que recebe o email
        const checkUserExist = await usuarioRepository.findOne({
            where:{email},
        });

        //Verifica se existe algum email dentro da requisicação 
        if(checkUserExist){
            throw new Error('Email addres already used');

        }

        //criação de um hash de tamanho 8 para criptografar a senha
        const hashSenha = await hash(senha, 8);

        //Criaçao do usuario utilizando o método create da classe Repository
        const usuario = usuarioRepository.create({
            id,
            email,
            nome,
            senha: hashSenha,
            statusUsuario,
            
        });

        //Salva a criação do objeto dentro do banco de dados
        await usuarioRepository.save(usuario);

        return usuario;
    }

}





export default CreateUserService;