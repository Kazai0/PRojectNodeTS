import  {Entity, Column, PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm';

import {uuid} from 'uuidv4';

@Entity('usuarios')
class Usuario{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    nome: string;

    @Column()
    senha: string;

    @Column()
    statusUsuario: string;
    
}

export default Usuario;