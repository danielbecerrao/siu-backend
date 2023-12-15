import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsFilesService } from './newsfiles.service';
import type { CreateNewsfileDto } from './dto/create-news-file.dto';
import type { UpdateNewsfileDto } from './dto/update-news-file.dto';
import { NewsFile } from './entities/newsFile.entity';

describe('NewsfilesService', () => {
  let service: NewsFilesService;
  let repository: Repository<NewsFile>;

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
      providers: [
        NewsFilesService,
        {
          provide: getRepositoryToken(NewsFile),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<NewsFilesService>(NewsFilesService);
    repository = module.get<Repository<NewsFile>>(getRepositoryToken(NewsFile));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a newsfile', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(newsfiles[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(newsfiles[0]);
      const result = await service.create(createNewsfileDto);
      expect(createSpy).toHaveBeenCalledWith(createNewsfileDto);
      expect(saveSpy).toHaveBeenCalledWith(newsfiles[0]);
      expect(result).toEqual(newsfiles[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(newsfiles[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createNewsfileDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(newsfiles[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Newsfile`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createNewsfileDto);
      expect(saveSpy).toHaveBeenCalledWith(newsfiles[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Newsfiles', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(newsfiles);
      const result = await service.findAll();
      expect(result).toEqual(newsfiles);
    });

    it('should return an empty array of Newsfiles', async () => {
      const emptyNewsfiles: NewsFile[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyNewsfiles);
      const result = await service.findAll();
      expect(result).toEqual(emptyNewsfiles);
    });
  });

  describe('findOne', () => {
    it('should return a Newsfile object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(newsfiles[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(newsfiles[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a newsfile', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newsfiles[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(newsfiles[0]);

      const result = await service.update(id, updateNewsfileDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...newsfiles[0],
        ...updateNewsfileDto,
      });

      expect(result).toEqual({
        ...newsfiles[0],
        ...updateNewsfileDto,
      });
    });

    it('should throw NotFoundException when newsfile does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateNewsfileDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newsfiles[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateNewsfileDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...newsfiles[0],
          ...updateNewsfileDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Newsfile`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Newsfile when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newsfiles[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(newsfiles[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(newsfiles[0]);
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
        .mockResolvedValue(newsfiles[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(newsfiles[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Newsfile`);
        }
      }
    });
  });
});
