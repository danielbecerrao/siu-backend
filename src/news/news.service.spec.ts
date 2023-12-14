import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsService } from './news.service';
import type { CreateNewDto } from './dto/create-news.dto';
import type { UpdateNewDto } from './dto/update-news.dto';
import { New } from './entities/news.entity';

describe('NewsService', () => {
  let service: NewsService;
  let repository: Repository<New>;

  const createNewDto: CreateNewDto = {
    name: 'Test New',
  };
  const updateNewDto: UpdateNewDto = {
    name: 'Test update New',
  };

  const news: New[] = [];
  for (let i = 1; i < 11; i++) {
    const new: New = new New();
    new.id = i;
    new.name = `TestNew${i}`;
    news.push(new);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewsService,
        {
          provide: getRepositoryToken(New),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<NewsService>(NewsService);
    repository = module.get<Repository<New>>(getRepositoryToken(New));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(news[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(news[0]);
      const result = await service.create(createNewDto);
      expect(createSpy).toHaveBeenCalledWith(createNewDto);
      expect(saveSpy).toHaveBeenCalledWith(news[0]);
      expect(result).toEqual(news[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(news[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createNewDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(news[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Noticium`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createNewDto);
      expect(saveSpy).toHaveBeenCalledWith(news[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of News', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(news);
      const result = await service.findAll();
      expect(result).toEqual(news);
    });

    it('should return an empty array of News', async () => {
      const emptyNews: New[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyNews);
      const result = await service.findAll();
      expect(result).toEqual(emptyNews);
    });
  });

  describe('findOne', () => {
    it('should return a New object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(news[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(news[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a new', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(news[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(news[0]);

      const result = await service.update(id, updateNewDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...news[0],
        ...updateNewDto,
      });

      expect(result).toEqual({
        ...news[0],
        ...updateNewDto,
      });
    });

    it('should throw NotFoundException when new does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateNewDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(news[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateNewDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...news[0],
          ...updateNewDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Noticium`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a New when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(news[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(news[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(news[0]);
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
        .mockResolvedValue(news[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(news[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Noticium`);
        }
      }
    });
  });
});
