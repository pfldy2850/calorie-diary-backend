import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishesModule } from './dishes/dishes.module';
import { Dish } from './dishes/entities/dish.entity';
import { Ingredient } from './ingredients/entities/ingredient.entity';
import { IngredientsModule } from './ingredients/ingredients.module';


// FIXME: load environment variables from .env files
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test-user',
      password: 'test-user',
      database: 'CalorieDiary',
      entities: [ 
        Dish,
        Ingredient
      ],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/generated/schema.gql'),
      sortSchema: false,
      debug: true,
      playground: true,
    }),
    DishesModule,
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
