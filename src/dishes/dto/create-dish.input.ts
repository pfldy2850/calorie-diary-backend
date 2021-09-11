import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDishInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
