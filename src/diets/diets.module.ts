import { forwardRef, Module } from '@nestjs/common';
import { DietsService } from './diets.service';
import { DietsResolver } from './diets.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { dietsProviders } from './diets.providers';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), UsersModule],
  providers: [...dietsProviders, DietsResolver, DietsService],
})
export class DietsModule {}
