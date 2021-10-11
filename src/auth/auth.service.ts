import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from './jwt.strategy';

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

  async validateUserByJwt(payload: JwtPayload): Promise<any> {
    return await this.validateUser(payload.email, payload.password);
  }

  async login(payload: JwtPayload) {
    console.log('AuthService::login', payload);
    const isValid = await this.validateUserByJwt(payload);
    if (isValid === null) {
      throw new UnauthorizedException();
    }

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
