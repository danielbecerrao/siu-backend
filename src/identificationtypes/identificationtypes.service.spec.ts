import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdentificationtypesService } from './identificationtypes.service';
import type { CreateIdentificationtypeDto } from './dto/create-identificationtype.dto';
import type { UpdateIdentificationtypeDto } from './dto/update-identificationtype.dto';
import { Identificationtype } from './entities/identificationtype.entity';

describe('IdentificationtypesService', () => {
  let service: IdentificationtypesService;
  let repository: Repository<Identificationtype>;

  const createIdentificationtypeDto: CreateIdentificationtypeDto = {
    name: 'Test Identificationtype',
  };
  const updateIdentificationtypeDto: UpdateIdentificationtypeDto = {
    name: 'Test update Identificationtype',
  };

  const identificationtypes: Identificationtype[] = [];
  for (let i = 1; i < 11; i++) {
    const identificationtype: Identificationtype = new Identificationtype();
    identificationtype.id = i;
    identificationtype.name = `TestIdentificationtype${i}`;
    identificationtypes.push(identificationtype);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IdentificationtypesService,
        {
          provide: getRepositoryToken(Identificationtype),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<IdentificationtypesService>(
      IdentificationtypesService,
    );
    repository = module.get<Repository<Identificationtype>>(
      getRepositoryToken(Identificationtype),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a identificationtype', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(identificationtypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(identificationtypes[0]);
      const result = await service.create(createIdentificationtypeDto);
      expect(createSpy).toHaveBeenCalledWith(createIdentificationtypeDto);
      expect(saveSpy).toHaveBeenCalledWith(identificationtypes[0]);
      expect(result).toEqual(identificationtypes[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(identificationtypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createIdentificationtypeDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(identificationtypes[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Identificationtype`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createIdentificationtypeDto);
      expect(saveSpy).toHaveBeenCalledWith(identificationtypes[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Identificationtypes', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(identificationtypes);
      const result = await service.findAll();
      expect(result).toEqual(identificationtypes);
    });

    it('should return an empty array of Identificationtypes', async () => {
      const emptyIdentificationtypes: Identificationtype[] = [];
      jest
        .spyOn(repository, 'find')
        .mockResolvedValue(emptyIdentificationtypes);
      const result = await service.findAll();
      expect(result).toEqual(emptyIdentificationtypes);
    });
  });

  describe('findOne', () => {
    it('should return a Identificationtype object when a valid id is passed', async () => {
      jest
        .spyOn(repository, 'findOneBy')
        .mockResolvedValue(identificationtypes[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(identificationtypes[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a identificationtype', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(identificationtypes[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(identificationtypes[0]);

      const result = await service.update(id, updateIdentificationtypeDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...identificationtypes[0],
        ...updateIdentificationtypeDto,
      });

      expect(result).toEqual({
        ...identificationtypes[0],
        ...updateIdentificationtypeDto,
      });
    });

    it('should throw NotFoundException when identificationtype does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(
        service.update(+id, updateIdentificationtypeDto),
      ).rejects.toThrowError(NotFoundException);
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(identificationtypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateIdentificationtypeDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...identificationtypes[0],
          ...updateIdentificationtypeDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(
            `Error al actualizar Identificationtype`,
          );
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Identificationtype when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(identificationtypes[0]);
      jest
        .spyOn(repository, 'softRemove')
        .mockResolvedValue(identificationtypes[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(identificationtypes[0]);
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
        .mockResolvedValue(identificationtypes[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(identificationtypes[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Identificationtype`);
        }
      }
    });
  });
});
