import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesService } from './roles.service';
import type { CreateRoleDto } from './dto/create-role.dto';
import type { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

describe('RolesService', () => {
  let service: RolesService;
  let repository: Repository<Role>;

  const createRoleDto: CreateRoleDto = {
    name: 'Test Role',
  };
  const updateRoleDto: UpdateRoleDto = {
    name: 'Test update Role',
  };

  const roles: Role[] = [];
  for (let i = 1; i < 11; i++) {
    const role: Role = new Role();
    role.id = i;
    role.name = `TestRole${i}`;
    roles.push(role);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesService,
        {
          provide: getRepositoryToken(Role),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<RolesService>(RolesService);
    repository = module.get<Repository<Role>>(getRepositoryToken(Role));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a role', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(roles[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(roles[0]);
      const result = await service.create(createRoleDto);
      expect(createSpy).toHaveBeenCalledWith(createRoleDto);
      expect(saveSpy).toHaveBeenCalledWith(roles[0]);
      expect(result).toEqual(roles[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(roles[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createRoleDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(roles[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Role`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createRoleDto);
      expect(saveSpy).toHaveBeenCalledWith(roles[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Roles', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(roles);
      const result = await service.findAll();
      expect(result).toEqual(roles);
    });

    it('should return an empty array of Roles', async () => {
      const emptyRoles: Role[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyRoles);
      const result = await service.findAll();
      expect(result).toEqual(emptyRoles);
    });
  });

  describe('findOne', () => {
    it('should return a Role object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(roles[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(roles[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a role', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(roles[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(roles[0]);

      const result = await service.update(id, updateRoleDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...roles[0],
        ...updateRoleDto,
      });

      expect(result).toEqual({
        ...roles[0],
        ...updateRoleDto,
      });
    });

    it('should throw NotFoundException when role does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateRoleDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(roles[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateRoleDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...roles[0],
          ...updateRoleDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Role`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Role when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(roles[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(roles[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(roles[0]);
    });

    it('should throw a NotFoundException when an invalid ID is provided', async () => {
      const id = 12;
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      await expect(service.remove(+id)).rejects.toThrowError(NotFoundException);
    });

    it('should throw BadRequestException on database error', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(roles[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(roles[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Role`);
        }
      }
    });
  });
});
