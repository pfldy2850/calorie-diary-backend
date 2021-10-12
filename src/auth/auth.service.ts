import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInUserInput } from 'src/users/dto/signin-user.input';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(payload: SignInUserInput) {
    const { email, password } = payload;
    const user = await this.validateUser(email, password);
    if (user === null) throw new UnauthorizedException();

    return Object.assign(user, { token: this.jwtService.sign({ email }) });
  }
}
