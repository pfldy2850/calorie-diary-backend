import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FoodsService } from './foods.service';
import { Food } from './entities/food.entity';
import { CreateFoodInput } from './dto/create-foods.input';

@Resolver(() => Food)
export class FoodsResolver {
  constructor(private readonly foodsService: FoodsService) { }

  @Mutation(() => Food)
  createFood(@Args('createFoodInput') createFoodInput: CreateFoodInput) {
    return this.foodsService.create(createFoodInput);
  }

  @Query(() => [Food], { name: 'foods' })
  findAll() {
    return this.foodsService.findAll();
  }

  @Query(() => Food, { name: 'food' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.foodsService.findOne(id);
  }
}
