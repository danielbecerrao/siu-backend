import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MpermissionsController } from './mpermissions.controller';
import { MpermissionsService } from './mpermissions.service';
import type { CreateMpermissionDto } from './dto/create-mpermission.dto';
import type { UpdateMpermissionDto } from './dto/update-mpermission.dto';
import { Mpermission } from './entities/mpermission.entity';

describe('MpermissionsController', () => {
  let controller: MpermissionsController;
  let service: MpermissionsService;

  const createMpermissionDto: CreateMpermissionDto = {
    name: 'Test Mpermission',
  };
  const updateMpermissionDto: UpdateMpermissionDto = {
    name: 'Test update Mpermission',
  };

  const mpermissions: Mpermission[] = [];
  for (let i = 1; i < 11; i++) {
    const mpermission: Mpermission = new Mpermission();
    mpermission.id = i;
    mpermission.name = `TestMpermission${i}`;
    mpermissions.push(mpermission);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpermissionsController],
      providers: [
        MpermissionsService,
        {
          provide: getRepositoryToken(Mpermission),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<MpermissionsController>(MpermissionsController);
    service = module.get<MpermissionsService>(MpermissionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Mpermission', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(mpermissions[0]);
      const result = await controller.create(createMpermissionDto);
      expect(createSpy).toHaveBeenCalledWith(createMpermissionDto);
      expect(result).toEqual(mpermissions[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Mpermissions', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(mpermissions);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(mpermissions);
    });

    it('should return an empty array of Mpermissions', async () => {
      const emptyMpermissions = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyMpermissions);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyMpermissions);
    });
  });

  describe('findOne', () => {
    it('should return a Mpermission when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(mpermissions[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(mpermissions[0]);
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
    it('should update a Mpermission', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(mpermissions[0]);
      const result = await controller.update(id, updateMpermissionDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateMpermissionDto);
      expect(result).toEqual(mpermissions[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Mpermission', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(mpermissions[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(mpermissions[0]);
    });
  });
});
