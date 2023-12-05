import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LabelsService } from './labels.service';
import type { CreateLabelDto } from './dto/create-label.dto';
import type { UpdateLabelDto } from './dto/update-label.dto';
import { Label } from './entities/label.entity';

describe('LabelsService', () => {
  let service: LabelsService;
  let repository: Repository<Label>;

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
      providers: [
        LabelsService,
        {
          provide: getRepositoryToken(Label),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<LabelsService>(LabelsService);
    repository = module.get<Repository<Label>>(getRepositoryToken(Label));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a label', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(labels[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(labels[0]);
      const result = await service.create(createLabelDto);
      expect(createSpy).toHaveBeenCalledWith(createLabelDto);
      expect(saveSpy).toHaveBeenCalledWith(labels[0]);
      expect(result).toEqual(labels[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(labels[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createLabelDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(labels[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Label`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createLabelDto);
      expect(saveSpy).toHaveBeenCalledWith(labels[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Labels', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(labels);
      const result = await service.findAll();
      expect(result).toEqual(labels);
    });

    it('should return an empty array of Labels', async () => {
      const emptyLabels: Label[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyLabels);
      const result = await service.findAll();
      expect(result).toEqual(emptyLabels);
    });
  });

  describe('findOne', () => {
    it('should return a Label object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(labels[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(labels[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a label', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(labels[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(labels[0]);

      const result = await service.update(id, updateLabelDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...labels[0],
        ...updateLabelDto,
      });

      expect(result).toEqual({
        ...labels[0],
        ...updateLabelDto,
      });
    });

    it('should throw NotFoundException when label does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateLabelDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(labels[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateLabelDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...labels[0],
          ...updateLabelDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Label`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Label when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(labels[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(labels[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(labels[0]);
    });

    it('should throw a NotFoundException when an invalid ID is provided', async () => {
      const id = 12;
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      await expect(service.remove(+id)).rejects.toThrowError(NotFoundException);
    });

    it('should throw BadRequestException on database error', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(labels[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(labels[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Label`);
        }
      }
    });
  });
});
