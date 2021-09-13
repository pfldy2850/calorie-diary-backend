import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity()
@ObjectType()
export class Dish {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  readonly id: number;
  
  @Column({ length: 255 })
  @Field()
  name: string;

  @Column()
  @Field()
  isCompleteProduct: boolean;

  @Column()
  @Field()
  calorie: number;

  @Column()
  @Field()
  carbohydrate: number;

  @Column()
  @Field()
  sugars: number;

  @Column()
  @Field()
  protein: number;

  @Column()
  @Field()
  fat: number;

  @Column()
  @Field()
  saturatedFat: number;

  @Column()
  @Field()
  transFat: number;

  @Column()
  @Field()
  cholesterol: number;

  @Column()
  @Field()
  sodium: number;

  @ManyToMany(
    type => Ingredient, 
    ingredients => ingredients.id, {
    cascade: false
  })
  @JoinTable()
  @Field(type => [Ingredient])
  contains: Ingredient[];
}
