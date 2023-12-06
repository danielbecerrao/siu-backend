import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdentificationtypesController } from './identificationtypes.controller';
import { IdentificationtypesService } from './identificationtypes.service';
import type { CreateIdentificationtypeDto } from './dto/create-identificationtype.dto';
import type { UpdateIdentificationtypeDto } from './dto/update-identificationtype.dto';
import { Identificationtype } from './entities/identificationtype.entity';

describe('IdentificationtypesController', () => {
  let controller: IdentificationtypesController;
  let service: IdentificationtypesService;

  const createIdentificationtypeDto: CreateIdentificationtypeDto = {
    name: 'Test Identificationtype',
  };
  const updateIdentificationtypeDto: UpdateIdentificationtypeDto = {
    name: 'Test update Identificationtype',
  };

  const identificationtypes: Identificationtype[] = [];
  for (let i = 1; i < 11; i++) {
    const identificationtype: Identificationtype = new Identificationtype();
    identificationtype.id = i;
    identificationtype.name = `TestIdentificationtype${i}`;
    identificationtypes.push(identificationtype);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdentificationtypesController],
      providers: [
        IdentificationtypesService,
        {
          provide: getRepositoryToken(Identificationtype),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<IdentificationtypesController>(
      IdentificationtypesController,
    );
    service = module.get<IdentificationtypesService>(
      IdentificationtypesService,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Identificationtype', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(identificationtypes[0]);
      const result = await controller.create(createIdentificationtypeDto);
      expect(createSpy).toHaveBeenCalledWith(createIdentificationtypeDto);
      expect(result).toEqual(identificationtypes[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Identificationtypes', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(identificationtypes);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(identificationtypes);
    });

    it('should return an empty array of Identificationtypes', async () => {
      const emptyIdentificationtypes = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyIdentificationtypes);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyIdentificationtypes);
    });
  });

  describe('findOne', () => {
    it('should return a Identificationtype when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(identificationtypes[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(identificationtypes[0]);
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
    it('should update a Identificationtype', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(identificationtypes[0]);
      const result = await controller.update(id, updateIdentificationtypeDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateIdentificationtypeDto);
      expect(result).toEqual(identificationtypes[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Identificationtype', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(identificationtypes[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(identificationtypes[0]);
    });
  });
});
