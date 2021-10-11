import { Inject, Injectable } from '@nestjs/common';
import { Repository, UsingJoinTableIsNotAllowedError } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const created_user = await this.userRepository.save(createUserInput);
    return created_user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  findOneById(id: string) {
    return this.userRepository.findOne({ id });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
