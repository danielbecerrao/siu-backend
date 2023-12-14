import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsImagesController } from './newsImages.controller';
import { NewsImagesService } from './newsImages.service';
import type { CreateNewsImageDto } from './dto/create-news-image.dto';
import type { UpdateNewsImageDto } from './dto/update-news-image.dto';
import { NewsImage } from './entities/newsImage.entity';

describe('NewsimagesController', () => {
  let controller: NewsImagesController;
  let service: NewsImagesService;

  const createNewsimageDto: CreateNewsImageDto = {
    name: 'Test Newsimage',
  };
  const updateNewsimageDto: UpdateNewsImageDto = {
    name: 'Test update Newsimage',
  };

  const newsimages: NewsImage[] = [];
  for (let i = 1; i < 11; i++) {
    const newsimage: NewsImage = new NewsImage();
    newsimage.id = i;
    newsimage.name = `TestNewsimage${i}`;
    newsimages.push(newsimage);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsImagesController],
      providers: [
        NewsImagesService,
        {
          provide: getRepositoryToken(NewsImage),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<NewsImagesController>(NewsImagesController);
    service = module.get<NewsImagesService>(NewsImagesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Newsimage', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(newsimages[0]);
      const result = await controller.create(createNewsimageDto);
      expect(createSpy).toHaveBeenCalledWith(createNewsimageDto);
      expect(result).toEqual(newsimages[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Newsimages', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(newsimages);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(newsimages);
    });

    it('should return an empty array of Newsimages', async () => {
      const emptyNewsimages = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyNewsimages);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyNewsimages);
    });
  });

  describe('findOne', () => {
    it('should return a Newsimage when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newsimages[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(newsimages[0]);
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
    it('should update a Newsimage', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(newsimages[0]);
      const result = await controller.update(id, updateNewsimageDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateNewsimageDto);
      expect(result).toEqual(newsimages[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Newsimage', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(newsimages[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(newsimages[0]);
    });
  });
});
