import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDishInput } from './dto/create-dish.input';
import { UpdateDishInput } from './dto/update-dish.input';
import { Dish } from './entities/dish.entity';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private dishesRepository: Repository<Dish>,
  ) {}

  create(createDishInput: CreateDishInput) {
    return 'This action adds a new dish';
  }

  findAll() {
    return this.dishesRepository.find();
  }

  findOne(id: number) {
    return this.dishesRepository.findOne(id);
  }

  update(id: number, updateDishInput: UpdateDishInput) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return this.dishesRepository.delete(id);
  }
}
