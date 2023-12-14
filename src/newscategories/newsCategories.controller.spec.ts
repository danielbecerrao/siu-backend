import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsCategoriesController } from './newsCategories.controller';
import { NewsCategoriesService } from './newsCategories.service';
import type { CreateNewsCategoryDto } from './dto/create-news-category.dto';
import type { UpdateNewsCategoryDto } from './dto/update-news-category.dto';
import { NewsCategory } from './entities/newsCategory.entity';

describe('NewsCategoriesController', () => {
  let controller: NewsCategoriesController;
  let service: NewsCategoriesService;

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
      controllers: [NewsCategoriesController],
      providers: [
        NewsCategoriesService,
        {
          provide: getRepositoryToken(NewsCategory),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<NewsCategoriesController>(NewsCategoriesController);
    service = module.get<NewsCategoriesService>(NewsCategoriesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Newscategory', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(newscategories[0]);
      const result = await controller.create(createNewscategoryDto);
      expect(createSpy).toHaveBeenCalledWith(createNewscategoryDto);
      expect(result).toEqual(newscategories[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Newscategories', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(newscategories);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(newscategories);
    });

    it('should return an empty array of Newscategories', async () => {
      const emptyNewscategories = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyNewscategories);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyNewscategories);
    });
  });

  describe('findOne', () => {
    it('should return a Newscategory when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newscategories[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(newscategories[0]);
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
    it('should update a Newscategory', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(newscategories[0]);
      const result = await controller.update(id, updateNewscategoryDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateNewscategoryDto);
      expect(result).toEqual(newscategories[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Newscategory', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(newscategories[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(newscategories[0]);
    });
  });
});
