import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsImagesService } from './newsImages.service';
import type { CreateNewsImageDto } from './dto/create-news-image.dto';
import type { UpdateNewsImageDto } from './dto/update-news-image.dto';
import { NewsImage } from './entities/newsImage.entity';

describe('NewsimagesService', () => {
  let service: NewsImagesService;
  let repository: Repository<NewsImage>;

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
      providers: [
        NewsImagesService,
        {
          provide: getRepositoryToken(NewsImage),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<NewsImagesService>(NewsImagesService);
    repository = module.get<Repository<NewsImage>>(
      getRepositoryToken(NewsImage),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a newsimage', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(newsimages[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(newsimages[0]);
      const result = await service.create(createNewsimageDto);
      expect(createSpy).toHaveBeenCalledWith(createNewsimageDto);
      expect(saveSpy).toHaveBeenCalledWith(newsimages[0]);
      expect(result).toEqual(newsimages[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(newsimages[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createNewsimageDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(newsimages[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Newsimage`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createNewsimageDto);
      expect(saveSpy).toHaveBeenCalledWith(newsimages[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Newsimages', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(newsimages);
      const result = await service.findAll();
      expect(result).toEqual(newsimages);
    });

    it('should return an empty array of Newsimages', async () => {
      const emptyNewsimages: NewsImage[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyNewsimages);
      const result = await service.findAll();
      expect(result).toEqual(emptyNewsimages);
    });
  });

  describe('findOne', () => {
    it('should return a Newsimage object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(newsimages[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(newsimages[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a newsimage', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newsimages[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(newsimages[0]);

      const result = await service.update(id, updateNewsimageDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...newsimages[0],
        ...updateNewsimageDto,
      });

      expect(result).toEqual({
        ...newsimages[0],
        ...updateNewsimageDto,
      });
    });

    it('should throw NotFoundException when newsimage does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(
        service.update(+id, updateNewsimageDto),
      ).rejects.toThrowError(NotFoundException);
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newsimages[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateNewsimageDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...newsimages[0],
          ...updateNewsimageDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Newsimage`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Newsimage when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(newsimages[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(newsimages[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(newsimages[0]);
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
        .mockResolvedValue(newsimages[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(newsimages[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Newsimage`);
        }
      }
    });
  });
});
