import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import type { CreateCommentDto } from './dto/create-comment.dto';
import type { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

describe('CommentsController', () => {
  let controller: CommentsController;
  let service: CommentsService;

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
      controllers: [CommentsController],
      providers: [
        CommentsService,
        {
          provide: getRepositoryToken(Comment),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<CommentsController>(CommentsController);
    service = module.get<CommentsService>(CommentsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Comment', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(comments[0]);
      const result = await controller.create(createCommentDto);
      expect(createSpy).toHaveBeenCalledWith(createCommentDto);
      expect(result).toEqual(comments[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Comments', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(comments);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(comments);
    });

    it('should return an empty array of Comments', async () => {
      const emptyComments = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyComments);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyComments);
    });
  });

  describe('findOne', () => {
    it('should return a Comment when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(comments[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(comments[0]);
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
    it('should update a Comment', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(comments[0]);
      const result = await controller.update(id, updateCommentDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateCommentDto);
      expect(result).toEqual(comments[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Comment', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(comments[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(comments[0]);
    });
  });
});
