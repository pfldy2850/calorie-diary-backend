import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EatHistoriesModule } from './eat-histories/eat-histories.module';
import { FoodsModule } from './foods/foods.module';
import { RecipeesModule } from './recipes/recipes.module';
import { DatabaseModule } from './database/database.module';

// FIXME: load environment variables from .env files
@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/_generated/schema.gql'),
      sortSchema: false,
      debug: true,
      playground: true,
    }),
    UsersModule,
    FoodsModule,
    RecipeesModule,
    EatHistoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
