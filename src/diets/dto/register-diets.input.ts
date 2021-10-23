import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class RegisterDietInput {
  @Field()
  date: string;

  @Field()
  name: string;

  @Field()
  calorie: number;

  @Field()
  carbohydrate: number;

  @Field()
  sugars: number;

  @Field()
  protein: number;

  @Field()
  fat: number;

  @Field()
  saturatedFat: number;

  @Field()
  transFat: number;

  @Field()
  cholesterol: number;

  @Field()
  sodium: number;
}
