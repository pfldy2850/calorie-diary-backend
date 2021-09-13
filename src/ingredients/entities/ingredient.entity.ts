import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Dish } from 'src/dishes/entities/dish.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Ingredient {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  readonly id: number;
  
  @Column({ length: 255 })
  @Field()
  name: string;

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
}
