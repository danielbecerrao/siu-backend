import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import type { CreateCityDto } from './dto/create-city.dto';
import type { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';

describe('CitiesController', () => {
  let controller: CitiesController;
  let service: CitiesService;
  let caslAbilityFactory: CaslAbilityFactory;

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
      controllers: [CitiesController],
      providers: [
        CitiesService,
        CaslAbilityFactory,
        {
          provide: getRepositoryToken(City),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<CitiesController>(CitiesController);
    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new City', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(cities[0]);
      const result = await controller.create(createCityDto);
      expect(createSpy).toHaveBeenCalledWith(createCityDto);
      expect(result).toEqual(cities[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Cities', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(cities);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(cities);
    });

    it('should return an empty array of Cities', async () => {
      const emptyCities = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyCities);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyCities);
    });
  });

  describe('findOne', () => {
    it('should return a City when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(cities[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(cities[0]);
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
    it('should update a City', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(cities[0]);
      const result = await controller.update(id, updateCityDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateCityDto);
      expect(result).toEqual(cities[0]);
    });
  });

  describe('delete', () => {
    it('should delete a City', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(cities[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(cities[0]);
    });
  });
});
