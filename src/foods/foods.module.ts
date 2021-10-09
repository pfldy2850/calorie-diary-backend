import { Module } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { FoodsResolver } from './foods.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { foodsProviders } from './foods.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...foodsProviders, FoodsResolver, FoodsService],
})
export class FoodsModule {}
