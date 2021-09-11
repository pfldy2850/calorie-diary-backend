import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesResolver } from './dishes.resolver';

@Module({
  providers: [DishesResolver, DishesService]
})
export class DishesModule {}
