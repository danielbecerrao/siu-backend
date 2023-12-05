import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenusService } from './menus.service';
import type { CreateMenuDto } from './dto/create-menu.dto';
import type { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

describe('MenusService', () => {
  let service: MenusService;
  let repository: Repository<Menu>;

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
      providers: [
        MenusService,
        {
          provide: getRepositoryToken(Menu),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<MenusService>(MenusService);
    repository = module.get<Repository<Menu>>(getRepositoryToken(Menu));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a menu', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(menus[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(menus[0]);
      const result = await service.create(createMenuDto);
      expect(createSpy).toHaveBeenCalledWith(createMenuDto);
      expect(saveSpy).toHaveBeenCalledWith(menus[0]);
      expect(result).toEqual(menus[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(menus[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createMenuDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(menus[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Menu`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createMenuDto);
      expect(saveSpy).toHaveBeenCalledWith(menus[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Menus', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(menus);
      const result = await service.findAll();
      expect(result).toEqual(menus);
    });

    it('should return an empty array of Menus', async () => {
      const emptyMenus: Menu[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyMenus);
      const result = await service.findAll();
      expect(result).toEqual(emptyMenus);
    });
  });

  describe('findOne', () => {
    it('should return a Menu object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(menus[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(menus[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a menu', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(menus[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(menus[0]);

      const result = await service.update(id, updateMenuDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...menus[0],
        ...updateMenuDto,
      });

      expect(result).toEqual({
        ...menus[0],
        ...updateMenuDto,
      });
    });

    it('should throw NotFoundException when menu does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateMenuDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(menus[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateMenuDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...menus[0],
          ...updateMenuDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Menu`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Menu when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(menus[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(menus[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(menus[0]);
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
        .mockResolvedValue(menus[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(menus[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Menu`);
        }
      }
    });
  });
});
