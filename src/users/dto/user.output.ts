import { Field, ObjectType } from '@nestjs/graphql';
import { Diet } from 'src/diets/entities/diet.entity';
import { OneToMany } from 'typeorm';

@ObjectType()
export class UserOutput {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  token?: string;

  @Field((type) => [Diet], { nullable: 'itemsAndList' })
  diets?: Diet[];
}
