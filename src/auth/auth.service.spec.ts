import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import type { AccessToken } from './interfaces/access-token.interface';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UsersService,
        JwtService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return user when valid credentials are provided', async () => {
      const username = 'testuser';
      const password = 'testpassword';

      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'testuser';
      user.password = 'testpassword';
      user.salt = '1234';
      user.lowerCaseUsername();
      await user.hashPassword();
      usersService.findOneByUsername = jest.fn().mockResolvedValue(user);
      const result = await service.validateUser(username, password);
      expect(usersService.findOneByUsername).toHaveBeenCalledWith(username);
      expect(result).toEqual(expect.objectContaining({ username }));
    });

    it('should return null when invalid credentials are provided', async () => {
      const username = 'testuser';
      const password = 'invalidpassword';

      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'testuser';
      user.password = 'testpassword';
      user.salt = '1234';
      user.lowerCaseUsername();
      await user.hashPassword();
      usersService.findOneByUsername = jest.fn().mockResolvedValue(user);
      const result = await service.validateUser(username, password);
      expect(usersService.findOneByUsername).toHaveBeenCalledWith(username);
      expect(result).toBeNull();
    });

    it('should return null when user is not found', async () => {
      const username = 'nonexistentuser';
      const password = 'testpassword';
      usersService.findOneByUsername = jest.fn().mockResolvedValue(null);
      const result = await service.validateUser(username, password);
      expect(usersService.findOneByUsername).toHaveBeenCalledWith(username);
      expect(result).toBeNull();
    });
  });

  describe('login', () => {
    it('should return an access token', async () => {
      const user: User = new User();
      user.name = 'test1';
      user.username = 'test1';
      const payload = { id: user.id, username: user.username };
      const accessToken: AccessToken = {
        accessToken: 'fakeAccessToken',
      };
      jwtService.sign = jest.fn().mockReturnValue(accessToken.accessToken);
      const result = await service.login(user);
      expect(jwtService.sign).toHaveBeenCalledWith(payload);
      expect(result).toEqual(accessToken);
    });
  });
});
