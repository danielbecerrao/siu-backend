import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentsService } from './comments.service';
import type { CreateCommentDto } from './dto/create-comment.dto';
import type { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

describe('CommentsService', () => {
  let service: CommentsService;
  let repository: Repository<Comment>;

  const createCommentDto: CreateCommentDto = {
    name: 'Test Comment',
  };
  const updateCommentDto: UpdateCommentDto = {
    name: 'Test update Comment',
  };

  const comments: Comment[] = [];
  for (let i = 1; i < 11; i++) {
    const comment: Comment = new Comment();
    comment.id = i;
    comment.name = `TestComment${i}`;
    comments.push(comment);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentsService,
        {
          provide: getRepositoryToken(Comment),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CommentsService>(CommentsService);
    repository = module.get<Repository<Comment>>(getRepositoryToken(Comment));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a comment', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(comments[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(comments[0]);
      const result = await service.create(createCommentDto);
      expect(createSpy).toHaveBeenCalledWith(createCommentDto);
      expect(saveSpy).toHaveBeenCalledWith(comments[0]);
      expect(result).toEqual(comments[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(comments[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createCommentDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(comments[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Comentario`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createCommentDto);
      expect(saveSpy).toHaveBeenCalledWith(comments[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Comments', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(comments);
      const result = await service.findAll();
      expect(result).toEqual(comments);
    });

    it('should return an empty array of Comments', async () => {
      const emptyComments: Comment[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyComments);
      const result = await service.findAll();
      expect(result).toEqual(emptyComments);
    });
  });

  describe('findOne', () => {
    it('should return a Comment object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(comments[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(comments[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a comment', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(comments[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(comments[0]);

      const result = await service.update(id, updateCommentDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...comments[0],
        ...updateCommentDto,
      });

      expect(result).toEqual({
        ...comments[0],
        ...updateCommentDto,
      });
    });

    it('should throw NotFoundException when comment does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateCommentDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(comments[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateCommentDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...comments[0],
          ...updateCommentDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Comentario`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Comment when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(comments[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(comments[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(comments[0]);
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
        .mockResolvedValue(comments[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(comments[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Comentario`);
        }
      }
    });
  });
});
