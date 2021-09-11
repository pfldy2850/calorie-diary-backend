import { createConnection } from 'typeorm';

export const databaseMySqlProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'CalorieDiary',
            entities: [
                __dirname + '../dishes/entities/*.entity{.ts,.js}'
            ],
            synchronize: true,
        }),
    },
];