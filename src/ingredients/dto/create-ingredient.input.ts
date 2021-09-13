import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateIngredientInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
