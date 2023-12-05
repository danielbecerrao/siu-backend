import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import type { User } from '../users/entities/user.entity';
import type { AccessToken } from './interfaces/access-token.interface';
import type { Payload } from './interfaces/payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthLog } from './entities/authlog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  public constructor(
    @InjectRepository(AuthLog)
    private readonly authLogsRepository: Repository<AuthLog>,
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
      user,
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '36000s' }),
    };
  }

  public async log(type: number, username: string): Promise<AuthLog> {
    const authLog: AuthLog = new AuthLog();
    authLog.type = type;
    authLog.username = username;
    return this.authLogsRepository.save(authLog);
  }

  public async refreshToken(user: User): Promise<AccessToken> {
    const payload: Payload = { id: user.id, username: user.username };
    return {
      user,
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '36000s' }),
    };
  }
}
