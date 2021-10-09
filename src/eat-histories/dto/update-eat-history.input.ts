import { CreateEatHistoryInput } from './create-eat-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEatHistoryInput extends PartialType(CreateEatHistoryInput) {
  @Field(() => Int)
  id: number;
}
