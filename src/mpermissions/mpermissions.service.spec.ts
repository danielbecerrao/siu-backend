import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MpermissionsService } from './mpermissions.service';
import type { CreateMpermissionDto } from './dto/create-mpermission.dto';
import type { UpdateMpermissionDto } from './dto/update-mpermission.dto';
import { Mpermission } from './entities/mpermission.entity';

describe('MpermissionsService', () => {
  let service: MpermissionsService;
  let repository: Repository<Mpermission>;

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
      providers: [
        MpermissionsService,
        {
          provide: getRepositoryToken(Mpermission),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<MpermissionsService>(MpermissionsService);
    repository = module.get<Repository<Mpermission>>(getRepositoryToken(Mpermission));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a mpermission', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(mpermissions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(mpermissions[0]);
      const result = await service.create(createMpermissionDto);
      expect(createSpy).toHaveBeenCalledWith(createMpermissionDto);
      expect(saveSpy).toHaveBeenCalledWith(mpermissions[0]);
      expect(result).toEqual(mpermissions[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(mpermissions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createMpermissionDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(mpermissions[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Mpermission`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createMpermissionDto);
      expect(saveSpy).toHaveBeenCalledWith(mpermissions[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Mpermissions', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(mpermissions);
      const result = await service.findAll();
      expect(result).toEqual(mpermissions);
    });

    it('should return an empty array of Mpermissions', async () => {
      const emptyMpermissions: Mpermission[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyMpermissions);
      const result = await service.findAll();
      expect(result).toEqual(emptyMpermissions);
    });
  });

  describe('findOne', () => {
    it('should return a Mpermission object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(mpermissions[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(mpermissions[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a mpermission', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(mpermissions[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(mpermissions[0]);

      const result = await service.update(id, updateMpermissionDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...mpermissions[0],
        ...updateMpermissionDto,
      });

      expect(result).toEqual({
        ...mpermissions[0],
        ...updateMpermissionDto,
      });
    });

    it('should throw NotFoundException when mpermission does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateMpermissionDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(mpermissions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateMpermissionDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...mpermissions[0],
          ...updateMpermissionDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Mpermission`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Mpermission when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(mpermissions[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(mpermissions[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(mpermissions[0]);
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
        .mockResolvedValue(mpermissions[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(mpermissions[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Mpermission`);
        }
      }
    });
  });
});
