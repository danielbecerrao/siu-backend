import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import type { CreateUserDto } from './dto/create-user.dto';
import type { UpdateUserDto } from './dto/update-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

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
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new doctor', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      await user.hashPassword();
      const findOneByUsernameSpy = jest
        .spyOn(service, 'findOneByUsername')
        .mockResolvedValue(null);
      const createSpy = jest.spyOn(repository, 'create').mockReturnValue(user);
      const saveSpy = jest.spyOn(repository, 'save').mockResolvedValue(user);

      const result = await service.create(createUserDto);
      expect(createSpy).toHaveBeenCalledWith(createUserDto);
      expect(saveSpy).toHaveBeenCalledWith(user);
      expect(findOneByUsernameSpy).toHaveBeenCalledWith(createUserDto.username);
      expect(result).toEqual(user);
    });

    it('should throw a ConflictException when a doctor with the same identification already exists', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      await user.hashPassword();
      const findOneByUsernameSpy = jest
        .spyOn(service, 'findOneByUsername')
        .mockResolvedValue(user);
      await expect(service.create(createUserDto)).rejects.toThrowError(
        ConflictException,
      );
      expect(findOneByUsernameSpy).toHaveBeenCalledWith(createUserDto.username);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      await user.hashPassword();
      const findOneByUsernameSpy = jest
        .spyOn(service, 'findOneByUsername')
        .mockResolvedValue(null);
      const createSpy = jest.spyOn(repository, 'create').mockReturnValue(user);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createUserDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Usuario`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createUserDto);
      expect(saveSpy).toHaveBeenCalledWith(user);
      expect(findOneByUsernameSpy).toHaveBeenCalledWith(createUserDto.username);
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
      jest.spyOn(repository, 'find').mockResolvedValue(users);
      const result = await service.findAll();
      expect(result).toEqual(users);
    });

    it('should return an empty array of Users', async () => {
      const emptyUsers: User[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyUsers);
      const result = await service.findAll();
      expect(result).toEqual(emptyUsers);
    });
  });

  describe('findOne', () => {
    it('should return a User object when a valid id is passed', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      await user.hashPassword();
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(user);
      const id = 1;
      const result = await service.findOne(id);
      expect(result).toEqual(user);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(id);

      expect(result).toBeNull();
    });
  });

  describe('findOneByUsername', () => {
    it('should return a User object when a valid id is passed', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      await user.hashPassword();
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(user);
      const username = 'test1';
      const result = await service.findOneByUsername(username);
      expect(result).toEqual(user);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 1;
      const result = await service.findOne(id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      const id = 1;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(user);
      const saveSpy = jest.spyOn(repository, 'save').mockResolvedValue(user);
      const result = await service.update(id, updateUserDto);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(saveSpy).toHaveBeenCalledWith({
        ...user,
        ...updateUserDto,
      });

      expect(result).toEqual({
        ...user,
        ...updateUserDto,
      });
    });

    it('should throw NotFoundException when user does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(id, createUserDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw ConflictException if username already exists', async () => {
      const id = 1;
      const user: User = new User();
      user.id = 1;
      user.name = 'test';
      user.username = 'test2';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();

      const user2: User = new User();
      user2.id = 2;
      user2.name = 'test1';
      user2.username = 'test1';
      user2.password = '1234';
      user2.salt = '1234';
      user.roleId = 1;
      user2.lowerCaseUsername();
      const finOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(user);
      const findOneByUsernameSpy = jest
        .spyOn(service, 'findOneByUsername')
        .mockResolvedValue(user2);
      try {
        await service.update(id, updateUserDto);
        expect(finOneSpy).toHaveBeenCalledWith(id);
        expect(findOneByUsernameSpy).toHaveBeenCalledWith(user.username);
      } catch (error) {
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(ConflictException);
          expect(error.message).toEqual(`Error al actualizar el usuario`);
        }
      }
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      const id = 1;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(user);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(id, updateUserDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...user,
          ...updateUserDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Usuario`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Country when a valid ID is provided', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      await user.hashPassword();
      const id = 1;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(user);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(user);

      const result = await service.remove(id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(user);
    });

    it('should throw a NotFoundException when an invalid ID is provided', async () => {
      const id = 12;
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      await expect(service.remove(id)).rejects.toThrowError(NotFoundException);
    });

    it('should throw BadRequestException on database error', async () => {
      const user: User = new User();
      user.id = 1;
      user.name = 'test1';
      user.username = 'test1';
      user.password = '1234';
      user.salt = '1234';
      user.roleId = 1;
      user.lowerCaseUsername();
      await user.hashPassword();
      const id = 1;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(user);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(id);
        fail('Service did not throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(user);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Usuario`);
        }
      }
    });
  });
});
