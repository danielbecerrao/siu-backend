import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountriesService } from './countries.service';
import type { CreateCountryDto } from './dto/create-country.dto';
import type { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

describe('CountriesService', () => {
  let service: CountriesService;
  let repository: Repository<Country>;

  const createCountryDto: CreateCountryDto = {
    name: 'Test Country',
  };
  const updateCountryDto: UpdateCountryDto = {
    name: 'Test update Country',
  };

  const countries: Country[] = [];
  for (let i = 1; i < 11; i++) {
    const country: Country = new Country();
    country.id = i;
    country.name = `TestCountry${i}`;
    countries.push(country);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountriesService,
        {
          provide: getRepositoryToken(Country),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CountriesService>(CountriesService);
    repository = module.get<Repository<Country>>(getRepositoryToken(Country));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a country', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(countries[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(countries[0]);
      const result = await service.create(createCountryDto);
      expect(createSpy).toHaveBeenCalledWith(createCountryDto);
      expect(saveSpy).toHaveBeenCalledWith(countries[0]);
      expect(result).toEqual(countries[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(countries[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createCountryDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(countries[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Pais`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createCountryDto);
      expect(saveSpy).toHaveBeenCalledWith(countries[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Countries', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(countries);
      const result = await service.findAll();
      expect(result).toEqual(countries);
    });

    it('should return an empty array of Countries', async () => {
      const emptyCountries: Country[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyCountries);
      const result = await service.findAll();
      expect(result).toEqual(emptyCountries);
    });
  });

  describe('findOne', () => {
    it('should return a Country object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(countries[0]);
      const id = 1;
      const result = await service.findOne(id);
      expect(result).toEqual(countries[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a country', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(countries[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(countries[0]);

      const result = await service.update(id, updateCountryDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...countries[0],
        ...updateCountryDto,
      });

      expect(result).toEqual({
        ...countries[0],
        ...updateCountryDto,
      });
    });

    it('should throw NotFoundException when country does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(id, updateCountryDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(countries[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(id, updateCountryDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...countries[0],
          ...updateCountryDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Pais`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Country when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(countries[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(countries[0]);

      const result = await service.remove(id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(countries[0]);
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
        .mockResolvedValue(countries[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(countries[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Pais`);
        }
      }
    });
  });
});
