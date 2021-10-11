import { ObjectType, Field, Int } from '@nestjs/graphql';
import { EatHistory } from 'src/eat-histories/entities/eat-history.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field((type) => String)
  readonly id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  @Field((type) => String)
  email: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  @Field((type) => String)
  password: string;

  @OneToMany((Type) => EatHistory, (eatHistory) => eatHistory.id, {
    cascade: true,
    nullable: true,
  })
  @Field((type) => [EatHistory], { nullable: 'itemsAndList' })
  eatHistories: EatHistory[];
}
