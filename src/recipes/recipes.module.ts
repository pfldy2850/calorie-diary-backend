import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesResolver } from './recipes.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { recipesProviders } from './recipes.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...recipesProviders, RecipesResolver, RecipesService],
})
export class RecipeesModule {}
