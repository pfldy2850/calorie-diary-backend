import { Connection } from 'typeorm';
import { EatHistory } from './entities/eat-history.entity';

export const eatHistoriesProviders = [
  {
    provide: 'EATHISTORY_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(EatHistory),
    inject: ['DATABASE_MYSQL_CONNECTION'],
  },
];
