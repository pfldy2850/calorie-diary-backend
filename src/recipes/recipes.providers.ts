import { Connection } from 'typeorm';
import { Recipe } from './entities/recipe.entity';

export const recipesProviders = [
  {
    provide: 'RECIPE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Recipe),
    inject: ['DATABASE_MYSQL_CONNECTION'],
  },
];
