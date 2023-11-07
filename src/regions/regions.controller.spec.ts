import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import type { CreateRegionDto } from './dto/create-region.dto';
import type { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './entities/region.entity';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';

describe('RegionsController', () => {
  let controller: RegionsController;
  let service: RegionsService;
  let caslAbilityFactory: CaslAbilityFactory;

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
      controllers: [RegionsController],
      providers: [
        RegionsService,
        CaslAbilityFactory,
        {
          provide: getRepositoryToken(Region),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<RegionsController>(RegionsController);
    service = module.get<RegionsService>(RegionsService);
    caslAbilityFactory = module.get<CaslAbilityFactory>(CaslAbilityFactory);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Region', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(regions[0]);
      const result = await controller.create(createRegionDto);
      expect(createSpy).toHaveBeenCalledWith(createRegionDto);
      expect(result).toEqual(regions[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Regions', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(regions);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(regions);
    });

    it('should return an empty array of Regions', async () => {
      const emptyRegions = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyRegions);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyRegions);
    });
  });

  describe('findOne', () => {
    it('should return a Region when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(regions[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(regions[0]);
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
    it('should update a Region', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(regions[0]);
      const result = await controller.update(id, updateRegionDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateRegionDto);
      expect(result).toEqual(regions[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Region', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(regions[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(regions[0]);
    });
  });
});
