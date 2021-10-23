import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Diet } from 'src/diets/entities/diet.entity';
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

  @OneToMany((Type) => Diet, (diet) => diet.id, {
    cascade: true,
    nullable: true,
  })
  @Field((type) => [Diet], { nullable: 'itemsAndList' })
  diets: Diet[];
}
