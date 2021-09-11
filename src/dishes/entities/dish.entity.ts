import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Dish {
  @Field(type => Int)
  id: number;
  
  @Field()
  name: string;

  @Field()
  isCompleteProduct: boolean;

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

  @Field(type => [Dish])
  ingredients: [Dish];
}
