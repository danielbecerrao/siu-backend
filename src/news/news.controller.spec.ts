<<<<<<< HEAD
import { Test, TestingModule } from '@nestjs/testing';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

describe('NewsController', () => {
  let controller: NewsController;
=======
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import type { CreateNewsDto } from './dto/create-news.dto';
import type { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

describe('NewsController', () => {
  let controller: NewsController;
  let service: NewsService;

  const createNewDto: CreateNewsDto = {
    name: 'Test New',
  };
  const updateNewDto: UpdateNewsDto = {
    name: 'Test update New',
  };

  const allNews: News[] = [];
  for (let i = 1; i < 11; i++) {
    const news: News = new News();
    news.id = i;
    news.name = `TestNew${i}`;
    allNews.push(news);
  }
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsController],
<<<<<<< HEAD
      providers: [NewsService],
    }).compile();

    controller = module.get<NewsController>(NewsController);
=======
      providers: [
        NewsService,
        {
          provide: getRepositoryToken(News),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<NewsController>(NewsController);
    service = module.get<NewsService>(NewsService);
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
<<<<<<< HEAD
=======

  describe('create', () => {
    it('should create a new New', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(allNews[0]);
      const result = await controller.create(createNewDto);
      expect(createSpy).toHaveBeenCalledWith(createNewDto);
      expect(result).toEqual(allNews[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of News', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(allNews);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(allNews);
    });

    it('should return an empty array of News', async () => {
      const emptyNews = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyNews);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyNews);
    });
  });

  describe('findOne', () => {
    it('should return a New when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(allNews[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(allNews[0]);
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
    it('should update a New', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(allNews[0]);
      const result = await controller.update(id, updateNewDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateNewDto);
      expect(result).toEqual(allNews[0]);
    });
  });

  describe('delete', () => {
    it('should delete a New', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(allNews[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(allNews[0]);
    });
  });
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
});
