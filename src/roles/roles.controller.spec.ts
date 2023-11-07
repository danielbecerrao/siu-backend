import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import type { CreateRoleDto } from './dto/create-role.dto';
import type { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';

describe('RolesController', () => {
  let controller: RolesController;
  let service: RolesService;
  let caslAbilityFactory: CaslAbilityFactory;

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
      controllers: [RolesController],
      providers: [
        RolesService,
        CaslAbilityFactory,
        {
          provide: getRepositoryToken(Role),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<RolesController>(RolesController);
    service = module.get<RolesService>(RolesService);
    caslAbilityFactory = module.get<CaslAbilityFactory>(CaslAbilityFactory);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Role', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(roles[0]);
      const result = await controller.create(createRoleDto);
      expect(createSpy).toHaveBeenCalledWith(createRoleDto);
      expect(result).toEqual(roles[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Roles', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(roles);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(roles);
    });

    it('should return an empty array of Roles', async () => {
      const emptyRoles = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyRoles);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyRoles);
    });
  });

  describe('findOne', () => {
    it('should return a Role when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(roles[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(roles[0]);
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
    it('should update a Role', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(roles[0]);
      const result = await controller.update(id, updateRoleDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateRoleDto);
      expect(result).toEqual(roles[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Role', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(roles[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(roles[0]);
    });
  });
});
