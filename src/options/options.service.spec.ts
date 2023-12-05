import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OptionsService } from './options.service';
import type { CreateOptionDto } from './dto/create-option.dto';
import type { UpdateOptionDto } from './dto/update-option.dto';
import { Option } from './entities/option.entity';

describe('OptionsService', () => {
  let service: OptionsService;
  let repository: Repository<Option>;

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
      providers: [
        OptionsService,
        {
          provide: getRepositoryToken(Option),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<OptionsService>(OptionsService);
    repository = module.get<Repository<Option>>(getRepositoryToken(Option));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a option', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(options[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(options[0]);
      const result = await service.create(createOptionDto);
      expect(createSpy).toHaveBeenCalledWith(createOptionDto);
      expect(saveSpy).toHaveBeenCalledWith(options[0]);
      expect(result).toEqual(options[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(options[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createOptionDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(options[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Option`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createOptionDto);
      expect(saveSpy).toHaveBeenCalledWith(options[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Options', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(options);
      const result = await service.findAll();
      expect(result).toEqual(options);
    });

    it('should return an empty array of Options', async () => {
      const emptyOptions: Option[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyOptions);
      const result = await service.findAll();
      expect(result).toEqual(emptyOptions);
    });
  });

  describe('findOne', () => {
    it('should return a Option object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(options[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(options[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a option', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(options[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(options[0]);

      const result = await service.update(id, updateOptionDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...options[0],
        ...updateOptionDto,
      });

      expect(result).toEqual({
        ...options[0],
        ...updateOptionDto,
      });
    });

    it('should throw NotFoundException when option does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateOptionDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(options[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateOptionDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...options[0],
          ...updateOptionDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Option`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Option when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(options[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(options[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(options[0]);
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
        .mockResolvedValue(options[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(options[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Option`);
        }
      }
    });
  });
});
