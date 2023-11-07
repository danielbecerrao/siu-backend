import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import type { CreateCountryDto } from './dto/create-country.dto';
import type { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';

describe('CountriesController', () => {
  let controller: CountriesController;
  let service: CountriesService;
  let caslAbilityFactory: CaslAbilityFactory;

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
      controllers: [CountriesController],
      providers: [
        CountriesService,
        CaslAbilityFactory,
        {
          provide: getRepositoryToken(Country),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<CountriesController>(CountriesController);
    service = module.get<CountriesService>(CountriesService);
    caslAbilityFactory = module.get<CaslAbilityFactory>(CaslAbilityFactory);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Country', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(countries[0]);
      const result = await controller.create(createCountryDto);
      expect(createSpy).toHaveBeenCalledWith(createCountryDto);
      expect(result).toEqual(countries[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Countries', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(countries);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(countries);
    });

    it('should return an empty array of Countries', async () => {
      const emptyCountries = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyCountries);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyCountries);
    });
  });

  describe('findOne', () => {
    it('should return a Country when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(countries[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(countries[0]);
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
    it('should update a Country', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(countries[0]);
      const result = await controller.update(id, updateCountryDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateCountryDto);
      expect(result).toEqual(countries[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Country', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(countries[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(countries[0]);
    });
  });
});
