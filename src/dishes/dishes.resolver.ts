import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DishesService } from './dishes.service';
import { Dish } from './entities/dish.entity';
import { CreateDishInput } from './dto/create-dish.input';
import { UpdateDishInput } from './dto/update-dish.input';

@Resolver(() => Dish)
export class DishesResolver {
  constructor(private readonly dishesService: DishesService) {}

  @Mutation(() => Dish)
  createDish(@Args('createDishInput') createDishInput: CreateDishInput) {
    return this.dishesService.create(createDishInput);
  }

  @Query(() => [Dish], { name: 'dishes' })
  findAll() {
    return this.dishesService.findAll();
  }

  @Query(() => Dish, { name: 'dish' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dishesService.findOne(id);
  }

  @Mutation(() => Dish)
  updateDish(@Args('updateDishInput') updateDishInput: UpdateDishInput) {
    return this.dishesService.update(updateDishInput.id, updateDishInput);
  }

  @Mutation(() => Dish)
  removeDish(@Args('id', { type: () => Int }) id: number) {
    return this.dishesService.remove(id);
  }
}
