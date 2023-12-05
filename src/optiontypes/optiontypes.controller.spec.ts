import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OptiontypesController } from './optiontypes.controller';
import { OptiontypesService } from './optiontypes.service';
import type { CreateOptiontypeDto } from './dto/create-optiontype.dto';
import type { UpdateOptiontypeDto } from './dto/update-optiontype.dto';
import { Optiontype } from './entities/optiontype.entity';

describe('OptiontypesController', () => {
  let controller: OptiontypesController;
  let service: OptiontypesService;

  const createOptiontypeDto: CreateOptiontypeDto = {
    name: 'Test Optiontype',
  };
  const updateOptiontypeDto: UpdateOptiontypeDto = {
    name: 'Test update Optiontype',
  };

  const optiontypes: Optiontype[] = [];
  for (let i = 1; i < 11; i++) {
    const optiontype: Optiontype = new Optiontype();
    optiontype.id = i;
    optiontype.name = `TestOptiontype${i}`;
    optiontypes.push(optiontype);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptiontypesController],
      providers: [
        OptiontypesService,
        {
          provide: getRepositoryToken(Optiontype),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<OptiontypesController>(OptiontypesController);
    service = module.get<OptiontypesService>(OptiontypesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Optiontype', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(optiontypes[0]);
      const result = await controller.create(createOptiontypeDto);
      expect(createSpy).toHaveBeenCalledWith(createOptiontypeDto);
      expect(result).toEqual(optiontypes[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Optiontypes', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(optiontypes);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(optiontypes);
    });

    it('should return an empty array of Optiontypes', async () => {
      const emptyOptiontypes = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyOptiontypes);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyOptiontypes);
    });
  });

  describe('findOne', () => {
    it('should return a Optiontype when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(optiontypes[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(optiontypes[0]);
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
    it('should update a Optiontype', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(optiontypes[0]);
      const result = await controller.update(id, updateOptiontypeDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateOptiontypeDto);
      expect(result).toEqual(optiontypes[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Optiontype', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(optiontypes[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(optiontypes[0]);
    });
  });
});
