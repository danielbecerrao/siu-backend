import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import type { CreateMenuDto } from './dto/create-menu.dto';
import type { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

describe('MenusController', () => {
  let controller: MenusController;
  let service: MenusService;

  const createMenuDto: CreateMenuDto = {
    name: 'Test Menu',
  };
  const updateMenuDto: UpdateMenuDto = {
    name: 'Test update Menu',
  };

  const menus: Menu[] = [];
  for (let i = 1; i < 11; i++) {
    const menu: Menu = new Menu();
    menu.id = i;
    menu.name = `TestMenu${i}`;
    menus.push(menu);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenusController],
      providers: [
        MenusService,
        {
          provide: getRepositoryToken(Menu),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<MenusController>(MenusController);
    service = module.get<MenusService>(MenusService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Menu', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(menus[0]);
      const result = await controller.create(createMenuDto);
      expect(createSpy).toHaveBeenCalledWith(createMenuDto);
      expect(result).toEqual(menus[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Menus', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(menus);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(menus);
    });

    it('should return an empty array of Menus', async () => {
      const emptyMenus = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyMenus);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyMenus);
    });
  });

  describe('findOne', () => {
    it('should return a Menu when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(menus[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(menus[0]);
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
    it('should update a Menu', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(menus[0]);
      const result = await controller.update(id, updateMenuDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateMenuDto);
      expect(result).toEqual(menus[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Menu', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(menus[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(menus[0]);
    });
  });
});
