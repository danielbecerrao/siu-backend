import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsCategoriesService } from './newsCategories.service';
import type { CreateNewsCategoryDto } from './dto/create-news-category.dto';
import type { UpdateNewsCategoryDto } from './dto/update-news-category.dto';
import { NewsCategory } from './entities/newsCategory.entity';

describe('NewsCategoriesService', () => {
  let service: NewsCategoriesService;
  let repository: Repository<NewsCategory>;

  const createNewscategoryDto: CreateNewsCategoryDto = {
    name: 'Test Newscategory',
  };
  const updateNewscategoryDto: UpdateNewsCategoryDto = {
    name: 'Test update Newscategory',
  };

  const newscategories: NewsCategory[] = [];
  for (let i = 1; i < 11; i++) {
    const newscategory: NewsCategory = new NewsCategory();
    newscategory.id = i;
    newscategory.name = `TestNewscategory${i}`;
    newscategories.push(newscategory);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewsCategoriesService,
        {
          provide: getRepositoryToken(NewsCategory),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<NewsCategoriesService>(NewsCategoriesService);
    repository = module.get<Repository<NewsCategory>>(
      getRepositoryToken(NewsCategory),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a newscategory', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(newscategories[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(newscategories[0]);
      const result = await service.create(createNewscategoryDto);
      expect(createSpy).toHaveBeenCalledWith(createNewscategoryDto);
      expect(saveSpy).toHaveBeenCalledWith(newscategories[0]);
      expect(result).toEqual(newscategories[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(newscategories[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createNewscategoryDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(newscategories[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Newscategory`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createNewscategoryDto);
      expect(saveSpy).toHaveBeenCalledWith(newscategories[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Newscategories', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(newscategories);
      const result = await service.findAll();
      expect(result).toEqual(newscategories);
    });

    it('should return an empty array of Newscategories', async () => {
      const emptyNewscategories: NewsCategory[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyNewscategories);
      const result = await service.findAll();
      expect(result).toEqual(emptyNewscategories);
    });
  });

  describe('findOne', () => {
    it('should return a Newscategory object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(newscategories[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(newscategories[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a newscategory', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newscategories[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(newscategories[0]);

      const result = await service.update(id, updateNewscategoryDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...newscategories[0],
        ...updateNewscategoryDto,
      });

      expect(result).toEqual({
        ...newscategories[0],
        ...updateNewscategoryDto,
      });
    });

    it('should throw NotFoundException when newscategory does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(
        service.update(+id, updateNewscategoryDto),
      ).rejects.toThrowError(NotFoundException);
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newscategories[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateNewscategoryDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...newscategories[0],
          ...updateNewscategoryDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Newscategory`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Newscategory when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newscategories[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(newscategories[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(newscategories[0]);
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
        .mockResolvedValue(newscategories[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(newscategories[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Newscategory`);
        }
      }
    });
  });
});
