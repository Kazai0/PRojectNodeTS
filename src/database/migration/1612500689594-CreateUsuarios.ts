import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsuarios1612500689594 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns :[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                        

                    },
                    {

                    
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,

                    },
                    {

                    
                        name: 'nome',
                        type: 'varchar',
                        isNullable: false,

                    },
                    {

                    
                        name: 'senha',
                        type: 'varchar',
                        isNullable: false,

                    },
                    {
                        name: 'statusUsuario',
                        type: 'varchar',
                        

                    },
                ],
            })
        
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
    }

}
