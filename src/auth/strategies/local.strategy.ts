import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import type { User } from '../../users/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  public constructor(private readonly authService: AuthService) {
    super();
  }

  public async validate(
    username: string,
    password: string,
  ): Promise<Partial<User>> {
    const user: Partial<User> | null = await this.authService.validateUser(
      username.toLowerCase(),
      password,
    );
    if (!user) {
      await this.authService.log(2, username.toLowerCase());
      throw new UnauthorizedException();
    }
    await this.authService.log(1, username.toLowerCase());
    return user;
  }
}
