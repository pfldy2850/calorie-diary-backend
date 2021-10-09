import { EatHistory } from 'src/eat-histories/entities/eat-history.entity';
import { Food } from 'src/foods/entities/food.entity';
import { Recipe } from 'src/recipes/entities/recipe.entity';
import { User } from 'src/users/entities/user.entity';
import { createConnection } from 'typeorm';

// FIXME: load environment variables from .env files
export const databaseMySqlProviders = [
  {
    provide: 'DATABASE_MYSQL_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'test-user',
        password: 'test-user',
        database: 'CalorieDiary',
        entities: [User, Food, Recipe, EatHistory],
        synchronize: true,
      }),
  },
];
