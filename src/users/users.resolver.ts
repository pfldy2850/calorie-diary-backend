import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/auth/auth.decorators';
import { LoginUserInput } from './dto/login-user.input';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { Any } from 'typeorm';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => User)
  // @Roles(UserRole.Admin)
  createUser(
    @Args('createUserInput', { type: () => CreateUserInput })
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  // @Roles(UserRole.Admin)
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  // @Roles(UserRole.Admin)
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.usersService.findOneById(id);
  }

  @Query(() => User, { name: 'userByEmail' })
  // @Roles(UserRole.Admin)
  findOneByEmail(@Args('email', { type: () => String }) email: string) {
    return this.usersService.findOneByEmail(email);
  }

  @Mutation(() => User)
  // @Roles(UserRole.Admin)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  // @Roles(UserRole.Admin)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }

  @Query((returns) => User, { name: 'whoAmI' })
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: User) {
    console.log('whoAmI', user);
    return this.usersService.findOneById(user.id);
  }

  @Mutation(() => String)
  async authenticate(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    const user = await this.authService.login(loginUserInput);
    return user && user.access_token;
  }
}
