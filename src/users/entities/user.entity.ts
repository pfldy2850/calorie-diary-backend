import { ObjectType, Field, Int } from '@nestjs/graphql';
import { EatHistory } from 'src/eat-histories/entities/eat-history.entity';
import { Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  readonly id: number;

  @OneToMany((Type) => EatHistory, (eatHistory) => eatHistory.id, {
    cascade: true,
  })
  @Field((type) => [EatHistory])
  eatHistories: EatHistory[];
}
