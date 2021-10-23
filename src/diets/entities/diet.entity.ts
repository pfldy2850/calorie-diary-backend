import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@ObjectType()
export class Diet {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  readonly id: number;

  @Column({ type: 'varchar', length: 255 })
  @Field()
  date: string;

  @Column({ type: 'varchar', length: 255 })
  @Field()
  name: string;

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

  @ManyToOne((Type) => User, (user) => user.id, {
    cascade: false,
    nullable: false,
  })
  @Field((type) => User)
  owner: User;
}
