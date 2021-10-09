import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class EatHistory {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  readonly id: number;

  @ManyToOne((type) => User, (user) => user.id, {
    cascade: false,
  })
  @Field((type) => User)
  user: User;
}
