import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActionsService } from './actions.service';
import type { CreateActionDto } from './dto/create-action.dto';
import type { UpdateActionDto } from './dto/update-action.dto';
import { Action } from './entities/action.entity';

describe('ActionsService', () => {
  let service: ActionsService;
  let repository: Repository<Action>;

  const createActionDto: CreateActionDto = {
    name: 'Test Action',
  };
  const updateActionDto: UpdateActionDto = {
    name: 'Test update Action',
  };

  const actions: Action[] = [];
  for (let i = 1; i < 11; i++) {
    const action: Action = new Action();
    action.id = i;
    action.name = `TestAction${i}`;
    actions.push(action);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActionsService,
        {
          provide: getRepositoryToken(Action),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ActionsService>(ActionsService);
    repository = module.get<Repository<Action>>(getRepositoryToken(Action));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a action', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(actions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(actions[0]);
      const result = await service.create(createActionDto);
      expect(createSpy).toHaveBeenCalledWith(createActionDto);
      expect(saveSpy).toHaveBeenCalledWith(actions[0]);
      expect(result).toEqual(actions[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(actions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createActionDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(actions[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Accion`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createActionDto);
      expect(saveSpy).toHaveBeenCalledWith(actions[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Actions', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(actions);
      const result = await service.findAll();
      expect(result).toEqual(actions);
    });

    it('should return an empty array of Actions', async () => {
      const emptyActions: Action[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyActions);
      const result = await service.findAll();
      expect(result).toEqual(emptyActions);
    });
  });

  describe('findOne', () => {
    it('should return a Action object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(actions[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(actions[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a action', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(actions[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(actions[0]);

      const result = await service.update(id, updateActionDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...actions[0],
        ...updateActionDto,
      });

      expect(result).toEqual({
        ...actions[0],
        ...updateActionDto,
      });
    });

    it('should throw NotFoundException when action does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateActionDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(actions[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateActionDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...actions[0],
          ...updateActionDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Accion`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Action when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(actions[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(actions[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(actions[0]);
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
        .mockResolvedValue(actions[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(actions[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Accion`);
        }
      }
    });
  });
});
