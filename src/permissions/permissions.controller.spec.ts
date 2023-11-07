import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import type { CreatePermissionDto } from './dto/create-permission.dto';
import type { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';

describe('PermissionsController', () => {
  let controller: PermissionsController;
  let service: PermissionsService;
  let caslAbilityFactory: CaslAbilityFactory;

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
      controllers: [PermissionsController],
      providers: [
        PermissionsService,
        CaslAbilityFactory,
        {
          provide: getRepositoryToken(Permission),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<PermissionsController>(PermissionsController);
    service = module.get<PermissionsService>(PermissionsService);
    caslAbilityFactory = module.get<CaslAbilityFactory>(CaslAbilityFactory);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Permission', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(permissions[0]);
      const result = await controller.create(createPermissionDto);
      expect(createSpy).toHaveBeenCalledWith(createPermissionDto);
      expect(result).toEqual(permissions[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Permissions', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(permissions);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(permissions);
    });

    it('should return an empty array of Permissions', async () => {
      const emptyPermissions = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyPermissions);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyPermissions);
    });
  });

  describe('findOne', () => {
    it('should return a Permission when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(permissions[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(permissions[0]);
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
    it('should update a Permission', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(permissions[0]);
      const result = await controller.update(id, updatePermissionDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updatePermissionDto);
      expect(result).toEqual(permissions[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Permission', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(permissions[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(permissions[0]);
    });
  });
});
