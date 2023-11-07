import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegionsService } from './regions.service';
import type { CreateRegionDto } from './dto/create-region.dto';
import type { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './entities/region.entity';

describe('RegionsService', () => {
  let service: RegionsService;
  let repository: Repository<Region>;

  const createRegionDto: CreateRegionDto = {
    name: 'Test Region',
  };
  const updateRegionDto: UpdateRegionDto = {
    name: 'Test update Region',
  };

  const regions: Region[] = [];
  for (let i = 1; i < 11; i++) {
    const region: Region = new Region();
    region.id = i;
    region.name = `TestRegion${i}`;
    region.countryId = 1;
    region.subregions = [];
    regions.push(region);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegionsService,
        {
          provide: getRepositoryToken(Region),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<RegionsService>(RegionsService);
    repository = module.get<Repository<Region>>(getRepositoryToken(Region));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a region', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(regions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(regions[0]);
      const result = await service.create(createRegionDto);
      expect(createSpy).toHaveBeenCalledWith(createRegionDto);
      expect(saveSpy).toHaveBeenCalledWith(regions[0]);
      expect(result).toEqual(regions[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(regions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createRegionDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(regions[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Region`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createRegionDto);
      expect(saveSpy).toHaveBeenCalledWith(regions[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Regions', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(regions);
      const result = await service.findAll();
      expect(result).toEqual(regions);
    });

    it('should return an empty array of Regions', async () => {
      const emptyRegions: Region[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyRegions);
      const result = await service.findAll();
      expect(result).toEqual(emptyRegions);
    });
  });

  describe('findOne', () => {
    it('should return a Region object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(regions[0]);
      const id = 1;
      const result = await service.findOne(id);
      expect(result).toEqual(regions[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a region', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(regions[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(regions[0]);

      const result = await service.update(id, updateRegionDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...regions[0],
        ...updateRegionDto,
      });

      expect(result).toEqual({
        ...regions[0],
        ...updateRegionDto,
      });
    });

    it('should throw NotFoundException when region does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(id, updateRegionDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(regions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(id, updateRegionDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...regions[0],
          ...updateRegionDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Region`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Region when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(regions[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(regions[0]);

      const result = await service.remove(id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(regions[0]);
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
        .mockResolvedValue(regions[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(regions[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Region`);
        }
      }
    });
  });
});
