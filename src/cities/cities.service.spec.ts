import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CitiesService } from './cities.service';
import type { CreateCityDto } from './dto/create-city.dto';
import type { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

describe('CitiesService', () => {
  let service: CitiesService;
  let repository: Repository<City>;

  const createCityDto: CreateCityDto = {
    name: 'Test City',
  };
  const updateCityDto: UpdateCityDto = {
    name: 'Test update City',
  };

  const cities: City[] = [];
  for (let i = 1; i < 11; i++) {
    const city: City = new City();
    city.id = i;
    city.name = `TestCity${i}`;
    cities.push(city);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CitiesService,
        {
          provide: getRepositoryToken(City),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CitiesService>(CitiesService);
    repository = module.get<Repository<City>>(getRepositoryToken(City));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a city', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(cities[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(cities[0]);
      const result = await service.create(createCityDto);
      expect(createSpy).toHaveBeenCalledWith(createCityDto);
      expect(saveSpy).toHaveBeenCalledWith(cities[0]);
      expect(result).toEqual(cities[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(cities[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createCityDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(cities[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Ciudad`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createCityDto);
      expect(saveSpy).toHaveBeenCalledWith(cities[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Cities', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(cities);
      const result = await service.findAll();
      expect(result).toEqual(cities);
    });

    it('should return an empty array of Cities', async () => {
      const emptyCities: City[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyCities);
      const result = await service.findAll();
      expect(result).toEqual(emptyCities);
    });
  });

  describe('findOne', () => {
    it('should return a City object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(cities[0]);
      const id = 1;
      const result = await service.findOne(id);
      expect(result).toEqual(cities[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a city', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(cities[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(cities[0]);

      const result = await service.update(id, updateCityDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...cities[0],
        ...updateCityDto,
      });

      expect(result).toEqual({
        ...cities[0],
        ...updateCityDto,
      });
    });

    it('should throw NotFoundException when city does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(id, updateCityDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 12;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(cities[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(id, updateCityDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...cities[0],
          ...updateCityDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Ciudad`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a City when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(cities[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(cities[0]);

      const result = await service.remove(id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(cities[0]);
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
        .mockResolvedValue(cities[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(cities[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Ciudad`);
        }
      }
    });
  });
});
