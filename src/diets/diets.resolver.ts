import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DietsService } from './diets.service';
import { Diet } from './entities/diet.entity';
import { RegisterDietInput } from './dto/register-diets.input';
import { RegisterDietWithUserInput } from './dto/register-diets-with-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/auth/auth.decorators';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Resolver(() => Diet)
export class DietsResolver {
  constructor(
    private readonly dietsService: DietsService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => Diet)
  @UseGuards(GqlAuthGuard)
  async registerDiet(
    @CurrentUser() user: User,
    @Args('registerDietInput') registerDietInput: RegisterDietInput,
  ) {
    const owner = await this.usersService.findOneById(user.id);
    console.log(owner);

    const regitserDietWithUserInput: RegisterDietWithUserInput = Object.assign(
      new RegisterDietWithUserInput(),
      registerDietInput,
      {
        owner: owner,
      },
    );
    console.log(regitserDietWithUserInput);

    return this.dietsService.register(regitserDietWithUserInput);
  }

  @Query(() => [Diet], { name: 'diets' })
  findAll() {
    return this.dietsService.findAll();
  }

  @Query(() => [Diet], { name: 'myDiets' })
  @UseGuards(GqlAuthGuard)
  async findAllOfMine(@CurrentUser() user: User) {
    return this.dietsService.findAllByOwner(user);
  }

  @Query(() => Diet, { name: 'diet' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dietsService.findOne(id);
  }
}
