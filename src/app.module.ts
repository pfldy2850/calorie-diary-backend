import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DietsModule } from './diets/diets.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

// FIXME: load environment variables from .env files
@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/_generated/schema.gql'),
      sortSchema: false,
      debug: true,
      playground: true,
      cors: true,
    }),
    TypeOrmModule,
    AuthModule,
    UsersModule,
    DietsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
