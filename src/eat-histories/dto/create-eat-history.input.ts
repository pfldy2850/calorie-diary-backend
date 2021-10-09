import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEatHistoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
