import  {Entity, Column, PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm';

@Entity('usuarios')
class Usuario{
    
    @PrimaryGeneratedColumn()
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