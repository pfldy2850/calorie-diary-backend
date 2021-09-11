import { Injectable } from '@nestjs/common';
import { CreateDishInput } from './dto/create-dish.input';
import { UpdateDishInput } from './dto/update-dish.input';

@Injectable()
export class DishesService {
  create(createDishInput: CreateDishInput) {
    return 'This action adds a new dish';
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} dish`;
  }

  update(id: number, updateDishInput: UpdateDishInput) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
