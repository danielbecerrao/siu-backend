import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import type { User } from '../users/entities/user.entity';
import type { AccessToken } from './interfaces/access-token.interface';
import type { Payload } from './interfaces/payload.interface';

@Injectable()
export class AuthService {
  public constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async validateUser(
    username: string,
    pass: string,
  ): Promise<Partial<User> | null> {
    const user: User | null =
      await this.usersService.findOneByUsername(username);
    if (!user) return null;
    const passwordHashed: string = await bcrypt.hash(pass, user.salt);
    if (user.password === passwordHashed) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  public async login(user: User): Promise<AccessToken> {
    const payload: Payload = { id: user.id, username: user.username };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '36000s' }),
    };
  }

  public async refreshToken(user: User): Promise<AccessToken> {
    const payload: Payload = { id: user.id, username: user.username };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '36000s' }),
    };
  }
}
