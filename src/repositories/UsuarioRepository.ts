import Usuario from '../models/usuario';

import {EntityRepository , Repository} from 'typeorm';

@EntityRepository(Usuario)
class UsuarioRepository extends Repository<Usuario> {
    

}

export default UsuarioRepository;