import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermissionsService } from './permissions.service';
import type { CreatePermissionDto } from './dto/create-permission.dto';
import type { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';

describe('PermissionsService', () => {
  let service: PermissionsService;
  let repository: Repository<Permission>;

  const createPermissionDto: CreatePermissionDto = {
    actionId: 1,
    roleId: 1,
    subjectId: 1,
  };
  const updatePermissionDto: UpdatePermissionDto = {
    actionId: 2,
    roleId: 1,
    subjectId: 3,
  };

  const permissions: Permission[] = [];
  for (let i = 1; i < 11; i++) {
    const permission: Permission = new Permission();
    permission.id = i;
    permission.actionId = i;
    permission.roleId = i + 1;
    permission.subjectId = i + 2;
    permissions.push(permission);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PermissionsService,
        {
          provide: getRepositoryToken(Permission),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PermissionsService>(PermissionsService);
    repository = module.get<Repository<Permission>>(
      getRepositoryToken(Permission),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a permission', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(permissions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(permissions[0]);
      const result = await service.create(createPermissionDto);
      expect(createSpy).toHaveBeenCalledWith(createPermissionDto);
      expect(saveSpy).toHaveBeenCalledWith(permissions[0]);
      expect(result).toEqual(permissions[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(permissions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createPermissionDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(permissions[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Permiso`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createPermissionDto);
      expect(saveSpy).toHaveBeenCalledWith(permissions[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Permissions', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(permissions);
      const result = await service.findAll();
      expect(result).toEqual(permissions);
    });

    it('should return an empty array of Permissions', async () => {
      const emptyPermissions: Permission[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyPermissions);
      const result = await service.findAll();
      expect(result).toEqual(emptyPermissions);
    });
  });

  describe('findOne', () => {
    it('should return a Permission object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(permissions[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(permissions[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a permission', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(permissions[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(permissions[0]);

      const result = await service.update(id, updatePermissionDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...permissions[0],
        ...updatePermissionDto,
      });

      expect(result).toEqual({
        ...permissions[0],
        ...updatePermissionDto,
      });
    });

    it('should throw NotFoundException when permission does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(
        service.update(+id, updatePermissionDto),
      ).rejects.toThrowError(NotFoundException);
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(permissions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updatePermissionDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...permissions[0],
          ...updatePermissionDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Permiso`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Permission when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(permissions[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(permissions[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(permissions[0]);
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
        .mockResolvedValue(permissions[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(permissions[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Permiso`);
        }
      }
    });
  });
});
