import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Dish {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;
  
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

  @OneToMany(type => Dish, dish => dish.id)
  @Field(type => Dish)
  ingredients: Dish[];
}
