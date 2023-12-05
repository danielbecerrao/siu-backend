import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OptionsController } from './options.controller';
import { OptionsService } from './options.service';
import type { CreateOptionDto } from './dto/create-option.dto';
import type { UpdateOptionDto } from './dto/update-option.dto';
import { Option } from './entities/option.entity';

describe('OptionsController', () => {
  let controller: OptionsController;
  let service: OptionsService;

  const createOptionDto: CreateOptionDto = {
    name: 'Test Option',
  };
  const updateOptionDto: UpdateOptionDto = {
    name: 'Test update Option',
  };

  const options: Option[] = [];
  for (let i = 1; i < 11; i++) {
    const option: Option = new Option();
    option.id = i;
    option.name = `TestOption${i}`;
    options.push(option);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptionsController],
      providers: [
        OptionsService,
        {
          provide: getRepositoryToken(Option),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<OptionsController>(OptionsController);
    service = module.get<OptionsService>(OptionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Option', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(options[0]);
      const result = await controller.create(createOptionDto);
      expect(createSpy).toHaveBeenCalledWith(createOptionDto);
      expect(result).toEqual(options[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Options', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(options);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(options);
    });

    it('should return an empty array of Options', async () => {
      const emptyOptions = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyOptions);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyOptions);
    });
  });

  describe('findOne', () => {
    it('should return a Option when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(options[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(options[0]);
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
    it('should update a Option', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(options[0]);
      const result = await controller.update(id, updateOptionDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateOptionDto);
      expect(result).toEqual(options[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Option', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(options[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(options[0]);
    });
  });
});
