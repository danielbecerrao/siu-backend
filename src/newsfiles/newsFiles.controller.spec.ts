import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsFilesController } from './newsfiles.controller';
import { NewsFilesService } from './newsfiles.service';
import type { CreateNewsfileDto } from './dto/create-news-file.dto';
import type { UpdateNewsfileDto } from './dto/update-news-file.dto';
import { NewsFile } from './entities/newsFile.entity';

describe('NewsfilesController', () => {
  let controller: NewsFilesController;
  let service: NewsFilesService;

  const createNewsfileDto: CreateNewsfileDto = {
    name: 'Test Newsfile',
  };
  const updateNewsfileDto: UpdateNewsfileDto = {
    name: 'Test update Newsfile',
  };

  const newsfiles: NewsFile[] = [];
  for (let i = 1; i < 11; i++) {
    const newsfile: NewsFile = new NewsFile();
    newsfile.id = i;
    newsfile.name = `TestNewsfile${i}`;
    newsfiles.push(newsfile);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsFilesController],
      providers: [
        NewsFilesService,
        {
          provide: getRepositoryToken(NewsFile),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<NewsFilesController>(NewsFilesController);
    service = module.get<NewsFilesService>(NewsFilesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Newsfile', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(newsfiles[0]);
      const result = await controller.create(createNewsfileDto);
      expect(createSpy).toHaveBeenCalledWith(createNewsfileDto);
      expect(result).toEqual(newsfiles[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Newsfiles', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(newsfiles);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(newsfiles);
    });

    it('should return an empty array of Newsfiles', async () => {
      const emptyNewsfiles = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyNewsfiles);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyNewsfiles);
    });
  });

  describe('findOne', () => {
    it('should return a Newsfile when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newsfiles[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(newsfiles[0]);
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
    it('should update a Newsfile', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(newsfiles[0]);
      const result = await controller.update(id, updateNewsfileDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateNewsfileDto);
      expect(result).toEqual(newsfiles[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Newsfile', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(newsfiles[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(newsfiles[0]);
    });
  });
});
