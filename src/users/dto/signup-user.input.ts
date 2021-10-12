import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class SignUpUserInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
