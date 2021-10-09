import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';


export enum FoodMeasure {
  GRAM = 'g',
  MILLILITER = 'ml'
}


@Entity()
@ObjectType()
export class Food {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  readonly id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  @Field()
  name: string;

  @Column({ type: 'enum', enum: FoodMeasure })
  servingSizeUnit: FoodMeasure;

  @Column({ default: 100 })
  servingSize: number;

  @Column({ default: 0 })
  @Field()
  calorie: number;

  @Column({ default: 0 })
  @Field()
  carbohydrate: number;

  @Column({ default: 0 })
  @Field()
  sugars: number;

  @Column({ default: 0 })
  @Field()
  protein: number;

  @Column({ default: 0 })
  @Field()
  fat: number;

  @Column({ default: 0 })
  @Field()
  saturatedFat: number;

  @Column({ default: 0 })
  @Field()
  transFat: number;

  @Column({ default: 0 })
  @Field()
  cholesterol: number;

  @Column({ default: 0 })
  @Field()
  sodium: number;
}
