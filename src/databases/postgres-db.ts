import { createConnection } from 'typeorm';

export const postgresDB = async () => {
    return await createConnection({
        type     : 'postgres',
        host     : '127.0.0.1',
        port     :  5432,
        username : 'postgres',
        password : 'postgres',
        database : 'postgres',
        ssl: false,
        logging: ['query', 'error'],
        synchronize: true,
    }).then((connection) => {
        console.log('Database connection established');
        
    })
}

