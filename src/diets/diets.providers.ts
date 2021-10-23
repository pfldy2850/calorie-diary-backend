import { Connection } from 'typeorm';
import { Diet } from './entities/diet.entity';

export const dietsProviders = [
  {
    provide: 'DIET_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Diet),
    inject: ['DATABASE_MYSQL_CONNECTION'],
  },
];
