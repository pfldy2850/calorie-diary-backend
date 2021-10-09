import { Inject, Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @Inject('RECIPE_REPOSITORY')
    private recipesRepository: Repository<Recipe>,
  ) {}

  create(createRecipeInput: CreateRecipeInput) {
    return 'This action adds a new recipe';
  }

  findAll() {
    return this.recipesRepository.find();
  }

  findAllLikeName(name: string) {
    return this.recipesRepository.find({
      where: {
        name: Like(`%${name}%`),
        order: { name: 'DESC' },
      },
    });
  }

  findOne(id: number) {
    return this.recipesRepository.findOne(id);
  }

  update(id: number, updateRecipeInput: UpdateRecipeInput) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return this.recipesRepository.delete(id);
  }
}
