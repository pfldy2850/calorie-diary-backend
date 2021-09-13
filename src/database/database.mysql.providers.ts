import { createConnection } from 'typeorm';
import { Dish } from '../dishes/entities/dish.entity';

// FIXME: load environment variables from .env files
export const databaseMySqlProviders = [
    {
        provide: 'DATABASE_MYSQL_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'test-user',
            password: 'test-user',
            database: 'CalorieDiary',
            entities: [
                Dish
            ],
            synchronize: true,
        }),
    },
];