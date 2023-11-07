import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActionsController } from './actions.controller';
import { ActionsService } from './actions.service';
import type { CreateActionDto } from './dto/create-action.dto';
import type { UpdateActionDto } from './dto/update-action.dto';
import { Action } from './entities/action.entity';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';

describe('ActionsController', () => {
  let controller: ActionsController;
  let service: ActionsService;
  let caslAbilityFactory: CaslAbilityFactory;

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
      controllers: [ActionsController],
      providers: [
        ActionsService,
        CaslAbilityFactory,
        {
          provide: getRepositoryToken(Action),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<ActionsController>(ActionsController);
    service = module.get<ActionsService>(ActionsService);
    caslAbilityFactory = module.get<CaslAbilityFactory>(CaslAbilityFactory);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Action', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(actions[0]);
      const result = await controller.create(createActionDto);
      expect(createSpy).toHaveBeenCalledWith(createActionDto);
      expect(result).toEqual(actions[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Actions', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(actions);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(actions);
    });

    it('should return an empty array of Actions', async () => {
      const emptyActions = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyActions);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyActions);
    });
  });

  describe('findOne', () => {
    it('should return a Action when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(actions[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(actions[0]);
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
    it('should update a Action', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(actions[0]);
      const result = await controller.update(id, updateActionDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateActionDto);
      expect(result).toEqual(actions[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Action', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(actions[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(actions[0]);
    });
  });
});
