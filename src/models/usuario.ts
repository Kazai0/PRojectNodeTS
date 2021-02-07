import  {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

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

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
    
}

export default Usuario;