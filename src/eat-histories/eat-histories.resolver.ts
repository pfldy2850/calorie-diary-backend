import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EatHistoriesService } from './eat-histories.service';
import { EatHistory } from './entities/eat-history.entity';
import { CreateEatHistoryInput } from './dto/create-eat-history.input';
import { UpdateEatHistoryInput } from './dto/update-eat-history.input';

@Resolver(() => EatHistory)
export class EatHistoriesResolver {
  constructor(private readonly eatHistoriesService: EatHistoriesService) {}

  @Mutation(() => EatHistory)
  createEatHistory(@Args('createEatHistoryInput') createEatHistoryInput: CreateEatHistoryInput) {
    return this.eatHistoriesService.create(createEatHistoryInput);
  }

  @Query(() => [EatHistory], { name: 'eatHistories' })
  findAll() {
    return this.eatHistoriesService.findAll();
  }

  @Query(() => EatHistory, { name: 'eatHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.eatHistoriesService.findOne(id);
  }

  @Mutation(() => EatHistory)
  updateEatHistory(@Args('updateEatHistoryInput') updateEatHistoryInput: UpdateEatHistoryInput) {
    return this.eatHistoriesService.update(updateEatHistoryInput.id, updateEatHistoryInput);
  }

  @Mutation(() => EatHistory)
  removeEatHistory(@Args('id', { type: () => Int }) id: number) {
    return this.eatHistoriesService.remove(id);
  }
}
