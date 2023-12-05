import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfiletypesService } from './profiletypes.service';
import type { CreateProfiletypeDto } from './dto/create-profiletype.dto';
import type { UpdateProfiletypeDto } from './dto/update-profiletype.dto';
import { Profiletype } from './entities/profiletype.entity';

describe('ProfiletypesService', () => {
  let service: ProfiletypesService;
  let repository: Repository<Profiletype>;

  const createProfiletypeDto: CreateProfiletypeDto = {
    name: 'Test Profiletype',
  };
  const updateProfiletypeDto: UpdateProfiletypeDto = {
    name: 'Test update Profiletype',
  };

  const profiletypes: Profiletype[] = [];
  for (let i = 1; i < 11; i++) {
    const profiletype: Profiletype = new Profiletype();
    profiletype.id = i;
    profiletype.name = `TestProfiletype${i}`;
    profiletypes.push(profiletype);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfiletypesService,
        {
          provide: getRepositoryToken(Profiletype),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ProfiletypesService>(ProfiletypesService);
    repository = module.get<Repository<Profiletype>>(
      getRepositoryToken(Profiletype),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a profiletype', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(profiletypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(profiletypes[0]);
      const result = await service.create(createProfiletypeDto);
      expect(createSpy).toHaveBeenCalledWith(createProfiletypeDto);
      expect(saveSpy).toHaveBeenCalledWith(profiletypes[0]);
      expect(result).toEqual(profiletypes[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(profiletypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createProfiletypeDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(profiletypes[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Profiletype`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createProfiletypeDto);
      expect(saveSpy).toHaveBeenCalledWith(profiletypes[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Profiletypes', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(profiletypes);
      const result = await service.findAll();
      expect(result).toEqual(profiletypes);
    });

    it('should return an empty array of Profiletypes', async () => {
      const emptyProfiletypes: Profiletype[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyProfiletypes);
      const result = await service.findAll();
      expect(result).toEqual(emptyProfiletypes);
    });
  });

  describe('findOne', () => {
    it('should return a Profiletype object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(profiletypes[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(profiletypes[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a profiletype', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(profiletypes[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(profiletypes[0]);

      const result = await service.update(id, updateProfiletypeDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...profiletypes[0],
        ...updateProfiletypeDto,
      });

      expect(result).toEqual({
        ...profiletypes[0],
        ...updateProfiletypeDto,
      });
    });

    it('should throw NotFoundException when profiletype does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(
        service.update(+id, updateProfiletypeDto),
      ).rejects.toThrowError(NotFoundException);
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(profiletypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateProfiletypeDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...profiletypes[0],
          ...updateProfiletypeDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Profiletype`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Profiletype when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(profiletypes[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(profiletypes[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(profiletypes[0]);
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
        .mockResolvedValue(profiletypes[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(profiletypes[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Profiletype`);
        }
      }
    });
  });
});
