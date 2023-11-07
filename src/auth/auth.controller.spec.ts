import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import type { AccessToken } from './interfaces/access-token.interface';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategy';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;
  let jwtStrategy: JwtStrategy;
  let localStrategy: LocalStrategy;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UsersService,
        JwtService,
        JwtStrategy,
        LocalStrategy,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: ConfigService,
          useValue: {
            getOrThrow: jest.fn().mockReturnValue('your-secret-key'),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
    jwtStrategy = module.get<JwtStrategy>(JwtStrategy);
    localStrategy = module.get<LocalStrategy>(LocalStrategy);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('jwtStategy should be defined', () => {
    expect(jwtStrategy).toBeDefined();
  });

  it('localStategy should be defined', () => {
    expect(localStrategy).toBeDefined();
  });

  describe('login', () => {
    it('should return an access token', async () => {
      const user: User = new User();
      user.name = 'test1';
      user.username = 'test1';

      const accessToken: AccessToken = {
        accessToken: 'fakeToken',
      };
      jest.spyOn(service, 'login').mockResolvedValue(accessToken);

      const result = await controller.login(user);

      expect(service.login).toHaveBeenCalledWith(user);
      expect(result).toBe(accessToken);
    });
  });

  it('should return the payload as is', async () => {
    const payload = { id: 1, username: 'testuser' };
    const result = await jwtStrategy.validate(payload);
    expect(result).toEqual(payload);
  });

  it('should return a user authorized', async () => {
    const username = 'test1';
    const password = '1234';
    const user: User = new User();
    user.name = 'test1';
    user.username = 'test1';
    service.validateUser = jest.fn().mockResolvedValue(user);
    const result = await localStrategy.validate(username, password);
    expect(result).toEqual(user);
  });

  it('should throw UnauthorizedException when user is not found', async () => {
    const username = 'nonexistentuser';
    const password = 'testpassword';
    service.validateUser = jest.fn().mockResolvedValue(null);
    try {
      await localStrategy.validate(username, password);
    } catch (error) {
      expect(error).toBeInstanceOf(UnauthorizedException);
    }
  });
});
