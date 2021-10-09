import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Food } from 'src/foods/entities/food.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
@ObjectType()
export class Recipe {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  readonly id: number;

  @Column({ length: 255 })
  @Field()
  name: string;

  @ManyToMany(
    type => Food,
    food => food.id, {
    cascade: false
  })
  @JoinTable()
  @Field(type => [Food])
  contains: Food[];
}
