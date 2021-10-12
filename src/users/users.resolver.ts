import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/auth/auth.decorators';
import { AuthService } from 'src/auth/auth.service';
import { SignInUserInput } from './dto/signin-user.input';
import { SignUpUserInput } from './dto/signup-user.input';
import { UserOutput } from './dto/user.output';

@Resolver(() => UserOutput)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Query(() => UserOutput, { name: 'userByEmail' })
  findOneByEmail(@Args('email', { type: () => String }) email: string) {
    return this.usersService.findOneByEmail(email);
  }

  @Query(() => UserOutput, { name: 'me' })
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: User) {
    return this.usersService.findOneById(user.id);
  }

  @Mutation(() => UserOutput)
  async signUpUser(
    @Args('signUpUserInput', { type: () => SignUpUserInput })
    signUpUserInput: SignUpUserInput,
  ) {
    const user = await this.usersService.signUp(signUpUserInput);
    const result = await this.signInUser(user);
    return result;
  }

  @Mutation(() => UserOutput)
  async signInUser(
    @Args('signInUserInput', { type: () => SignInUserInput })
    signInUserInput: SignInUserInput,
  ) {
    const result = await this.authService.login(signInUserInput);
    return result;
  }
}
