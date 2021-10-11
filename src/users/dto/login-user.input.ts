import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
