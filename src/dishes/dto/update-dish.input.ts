import { CreateDishInput } from './create-dish.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDishInput extends PartialType(CreateDishInput) {
  @Field(() => Int)
  id: number;
}
