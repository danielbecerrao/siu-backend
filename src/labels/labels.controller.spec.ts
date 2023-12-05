import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LabelsController } from './labels.controller';
import { LabelsService } from './labels.service';
import type { CreateLabelDto } from './dto/create-label.dto';
import type { UpdateLabelDto } from './dto/update-label.dto';
import { Label } from './entities/label.entity';

describe('LabelsController', () => {
  let controller: LabelsController;
  let service: LabelsService;

  const createLabelDto: CreateLabelDto = {
    name: 'Test Label',
  };
  const updateLabelDto: UpdateLabelDto = {
    name: 'Test update Label',
  };

  const labels: Label[] = [];
  for (let i = 1; i < 11; i++) {
    const label: Label = new Label();
    label.id = i;
    label.name = `TestLabel${i}`;
    labels.push(label);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabelsController],
      providers: [
        LabelsService,
        {
          provide: getRepositoryToken(Label),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<LabelsController>(LabelsController);
    service = module.get<LabelsService>(LabelsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Label', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(labels[0]);
      const result = await controller.create(createLabelDto);
      expect(createSpy).toHaveBeenCalledWith(createLabelDto);
      expect(result).toEqual(labels[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Labels', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(labels);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(labels);
    });

    it('should return an empty array of Labels', async () => {
      const emptyLabels = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyLabels);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyLabels);
    });
  });

  describe('findOne', () => {
    it('should return a Label when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(labels[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(labels[0]);
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
    it('should update a Label', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(labels[0]);
      const result = await controller.update(id, updateLabelDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateLabelDto);
      expect(result).toEqual(labels[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Label', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(labels[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(labels[0]);
    });
  });
});
