import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { Like, Repository } from 'typeorm';
import { RegisterDietWithUserInput } from './dto/register-diets-with-user.input';
import { RegisterDietInput } from './dto/register-diets.input';

import { Diet } from './entities/diet.entity';

@Injectable()
export class DietsService {
  constructor(
    @Inject('DIET_REPOSITORY')
    private dietRepository: Repository<Diet>,
  ) {}

  async register(
    registerDietWithUserInput: RegisterDietWithUserInput,
  ): Promise<Diet | Diet[]> {
    const registered_diet = await this.dietRepository.save(
      registerDietWithUserInput,
    );

    return registered_diet;
  }

  findAll(): Promise<Diet[]> {
    return this.dietRepository.find();
  }

  findAllLikeName(name: string): Promise<Diet[]> {
    return this.dietRepository.find({
      where: {
        name: Like(`%${name}%`),
        order: { name: 'DESC' },
      },
    });
  }

  findOne(id: number): Promise<Diet> {
    return this.dietRepository.findOne(id);
  }

  findAllByOwner(owner: User): Promise<Diet[]> {
    return this.dietRepository.find({
      where: {
        owner: owner,
      },
    });
  }
}
