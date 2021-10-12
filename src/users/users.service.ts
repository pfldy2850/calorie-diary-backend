import { Inject, Injectable } from '@nestjs/common';
import { Repository, UsingJoinTableIsNotAllowedError } from 'typeorm';
import { User } from './entities/user.entity';
import * as jwt from 'jsonwebtoken';
import { SignUpUserInput } from './dto/signup-user.input';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async signUp(signUpUserInput: SignUpUserInput): Promise<User> {
    const signedUpUser = await this.userRepository.save(signUpUserInput);
    return signedUpUser;
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  findOneById(id: string) {
    return this.userRepository.findOne({ id });
  }
}
