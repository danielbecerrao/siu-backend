import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubregionsService } from './subregions.service';
import type { CreateSubregionDto } from './dto/create-subregion.dto';
import type { UpdateSubregionDto } from './dto/update-subregion.dto';
import { Subregion } from './entities/subregion.entity';

describe('SubregionsService', () => {
  let service: SubregionsService;
  let repository: Repository<Subregion>;

  const createSubregionDto: CreateSubregionDto = {
    name: 'Test Subregion',
  };
  const updateSubregionDto: UpdateSubregionDto = {
    name: 'Test update Subregion',
  };

  const subregions: Subregion[] = [];
  for (let i = 1; i < 11; i++) {
    const subregion: Subregion = new Subregion();
    subregion.id = i;
    subregion.name = `TestSubregion${i}`;
    subregions.push(subregion);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubregionsService,
        {
          provide: getRepositoryToken(Subregion),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<SubregionsService>(SubregionsService);
    repository = module.get<Repository<Subregion>>(
      getRepositoryToken(Subregion),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a subregion', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(subregions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(subregions[0]);
      const result = await service.create(createSubregionDto);
      expect(createSpy).toHaveBeenCalledWith(createSubregionDto);
      expect(saveSpy).toHaveBeenCalledWith(subregions[0]);
      expect(result).toEqual(subregions[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(subregions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createSubregionDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(subregions[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Subregion`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createSubregionDto);
      expect(saveSpy).toHaveBeenCalledWith(subregions[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Subregions', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(subregions);
      const result = await service.findAll();
      expect(result).toEqual(subregions);
    });

    it('should return an empty array of Subregions', async () => {
      const emptySubregions: Subregion[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptySubregions);
      const result = await service.findAll();
      expect(result).toEqual(emptySubregions);
    });
  });

  describe('findOne', () => {
    it('should return a Subregion object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(subregions[0]);
      const id = 1;
      const result = await service.findOne(id);
      expect(result).toEqual(subregions[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a subregion', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(subregions[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(subregions[0]);

      const result = await service.update(id, updateSubregionDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...subregions[0],
        ...updateSubregionDto,
      });

      expect(result).toEqual({
        ...subregions[0],
        ...updateSubregionDto,
      });
    });

    it('should throw NotFoundException when subregion does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(id, updateSubregionDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(subregions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(id, updateSubregionDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...subregions[0],
          ...updateSubregionDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Subregion`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Subregion when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(subregions[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(subregions[0]);

      const result = await service.remove(id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(subregions[0]);
    });

    it('should throw a NotFoundException when an invalid ID is provided', async () => {
      const id = 12;
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      await expect(service.remove(id)).rejects.toThrowError(NotFoundException);
    });

    it('should throw BadRequestException on database error', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(subregions[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(subregions[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Subregion`);
        }
      }
    });
  });
});
