import { Inject, Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { CreateFoodInput } from './dto/create-foods.input';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodsService {
  constructor(
    @Inject('FOOD_REPOSITORY')
    private foodRepository: Repository<Food>,
  ) {}

  async create(createFoodInput: CreateFoodInput): Promise<Food | Food[]> {
    const created_food = await this.foodRepository.save(createFoodInput);

    return created_food;
  }

  findAll(): Promise<Food[]> {
    return this.foodRepository.find();
  }

  findAllLikeName(name: string): Promise<Food[]> {
    return this.foodRepository.find({
      where: {
        name: Like(`%${name}%`),
        order: { name: 'DESC' },
      },
    });
  }

  findOne(id: number): Promise<Food> {
    return this.foodRepository.findOne(id);
  }
}
