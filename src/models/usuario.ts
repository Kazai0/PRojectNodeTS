import  {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity('usuarios')
class Usuario{
    
    @Column()
    id: string;

    @Column()
    email: string;

    @Column()
    nome: string;

    @Column()
    senha: string;

    
}

export default Usuario;