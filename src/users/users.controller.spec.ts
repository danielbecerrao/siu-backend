import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import type { CreateUserDto } from './dto/create-user.dto';
import type { UpdateUserDto } from './dto/update-user.dto';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;
  let caslAbilityFactory: CaslAbilityFactory;

  const createUserDto: CreateUserDto = {
    name: 'Test User',
    username: 'test1',
    password: '1234',
    roleId: 1,
  };
  const updateUserDto: UpdateUserDto = {
    name: 'Test update User',
    username: 'test1',
    password: '1234',
    roleId: 1,
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        CaslAbilityFactory,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
    caslAbilityFactory = module.get<CaslAbilityFactory>(CaslAbilityFactory);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new User', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      await user.hashPassword();
      const createSpy = jest.spyOn(service, 'create').mockResolvedValue(user);
      const result = await controller.create(createUserDto);
      expect(createSpy).toHaveBeenCalledWith(createUserDto);
      expect(result).toEqual(user);
    });
  });

  describe('findAll', () => {
    it('should return an array of Users', async () => {
      const users: User[] = [];
      for (let i = 1; i < 11; i++) {
        const user: User = new User();
        user.id = i;
        user.name = `test${i}`;
        user.username = `test${i}`;
        user.password = '1234';
        user.salt = '1234';
        user.roleId = 1;
        user.lowerCaseUsername();
        await user.hashPassword();
        users.push(user);
      }
      jest.spyOn(service, 'findAll').mockResolvedValue(users);

      const result = await controller.findAll();
      expect(result).toEqual(users);
    });

    it('should return an empty array of Users', async () => {
      jest.spyOn(service, 'findAll').mockResolvedValue([]);

      const result = await controller.findAll();
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return a User when a valid ID is provided', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      await user.hashPassword();
      const id = '1';
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(user);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(user);
    });

    it('should return 404 when an invalid ID is provided', async () => {
      const id = '4';
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toBe(null);
    });
  });

  describe('update', () => {
    it('should update a User', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      await user.hashPassword();
      const id = '1';
      const updateSpy = jest.spyOn(service, 'update').mockResolvedValue(user);
      const result = await controller.update(id, updateUserDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateUserDto);
      expect(result).toEqual(user);
    });
  });

  describe('delete', () => {
    it('should delete a User', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      await user.hashPassword();
      const id = '1';
      const removeSpy = jest.spyOn(service, 'remove').mockResolvedValue(user);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(user);
    });
  });
});
