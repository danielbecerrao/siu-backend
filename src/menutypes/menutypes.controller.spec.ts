import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenutypesController } from './menutypes.controller';
import { MenutypesService } from './menutypes.service';
import type { CreateMenutypeDto } from './dto/create-menutype.dto';
import type { UpdateMenutypeDto } from './dto/update-menutype.dto';
import { Menutype } from './entities/menutype.entity';

describe('MenutypesController', () => {
  let controller: MenutypesController;
  let service: MenutypesService;

  const createMenutypeDto: CreateMenutypeDto = {
    name: 'Test Menutype',
  };
  const updateMenutypeDto: UpdateMenutypeDto = {
    name: 'Test update Menutype',
  };

  const menutypes: Menutype[] = [];
  for (let i = 1; i < 11; i++) {
    const menutype: Menutype = new Menutype();
    menutype.id = i;
    menutype.name = `TestMenutype${i}`;
    menutypes.push(menutype);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenutypesController],
      providers: [
        MenutypesService,
        {
          provide: getRepositoryToken(Menutype),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<MenutypesController>(MenutypesController);
    service = module.get<MenutypesService>(MenutypesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Menutype', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(menutypes[0]);
      const result = await controller.create(createMenutypeDto);
      expect(createSpy).toHaveBeenCalledWith(createMenutypeDto);
      expect(result).toEqual(menutypes[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Menutypes', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(menutypes);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(menutypes);
    });

    it('should return an empty array of Menutypes', async () => {
      const emptyMenutypes = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyMenutypes);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyMenutypes);
    });
  });

  describe('findOne', () => {
    it('should return a Menutype when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(menutypes[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(menutypes[0]);
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
    it('should update a Menutype', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(menutypes[0]);
      const result = await controller.update(id, updateMenutypeDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateMenutypeDto);
      expect(result).toEqual(menutypes[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Menutype', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(menutypes[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(menutypes[0]);
    });
  });
});
