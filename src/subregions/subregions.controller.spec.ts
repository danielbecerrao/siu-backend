import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubregionsController } from './subregions.controller';
import { SubregionsService } from './subregions.service';
import type { CreateSubregionDto } from './dto/create-subregion.dto';
import type { UpdateSubregionDto } from './dto/update-subregion.dto';
import { Subregion } from './entities/subregion.entity';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';

describe('SubregionsController', () => {
  let controller: SubregionsController;
  let service: SubregionsService;
  let caslAbilityFactory: CaslAbilityFactory;

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
      controllers: [SubregionsController],
      providers: [
        SubregionsService,
        CaslAbilityFactory,
        {
          provide: getRepositoryToken(Subregion),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<SubregionsController>(SubregionsController);
    service = module.get<SubregionsService>(SubregionsService);
    caslAbilityFactory = module.get<CaslAbilityFactory>(CaslAbilityFactory);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Subregion', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(subregions[0]);
      const result = await controller.create(createSubregionDto);
      expect(createSpy).toHaveBeenCalledWith(createSubregionDto);
      expect(result).toEqual(subregions[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Subregions', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(subregions);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(subregions);
    });

    it('should return an empty array of Subregions', async () => {
      const emptySubregions = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptySubregions);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptySubregions);
    });
  });

  describe('findOne', () => {
    it('should return a Subregion when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(subregions[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(subregions[0]);
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
    it('should update a Subregion', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(subregions[0]);
      const result = await controller.update(id, updateSubregionDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateSubregionDto);
      expect(result).toEqual(subregions[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Subregion', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(subregions[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(subregions[0]);
    });
  });
});
