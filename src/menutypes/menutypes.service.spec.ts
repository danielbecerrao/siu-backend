import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenutypesService } from './menutypes.service';
import type { CreateMenutypeDto } from './dto/create-menutype.dto';
import type { UpdateMenutypeDto } from './dto/update-menutype.dto';
import { Menutype } from './entities/menutype.entity';

describe('MenutypesService', () => {
  let service: MenutypesService;
  let repository: Repository<Menutype>;

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
      providers: [
        MenutypesService,
        {
          provide: getRepositoryToken(Menutype),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<MenutypesService>(MenutypesService);
    repository = module.get<Repository<Menutype>>(getRepositoryToken(Menutype));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a menutype', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(menutypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(menutypes[0]);
      const result = await service.create(createMenutypeDto);
      expect(createSpy).toHaveBeenCalledWith(createMenutypeDto);
      expect(saveSpy).toHaveBeenCalledWith(menutypes[0]);
      expect(result).toEqual(menutypes[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(menutypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createMenutypeDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(menutypes[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Menutype`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createMenutypeDto);
      expect(saveSpy).toHaveBeenCalledWith(menutypes[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Menutypes', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(menutypes);
      const result = await service.findAll();
      expect(result).toEqual(menutypes);
    });

    it('should return an empty array of Menutypes', async () => {
      const emptyMenutypes: Menutype[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyMenutypes);
      const result = await service.findAll();
      expect(result).toEqual(emptyMenutypes);
    });
  });

  describe('findOne', () => {
    it('should return a Menutype object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(menutypes[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(menutypes[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a menutype', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(menutypes[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(menutypes[0]);

      const result = await service.update(id, updateMenutypeDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...menutypes[0],
        ...updateMenutypeDto,
      });

      expect(result).toEqual({
        ...menutypes[0],
        ...updateMenutypeDto,
      });
    });

    it('should throw NotFoundException when menutype does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateMenutypeDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(menutypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateMenutypeDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...menutypes[0],
          ...updateMenutypeDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Menutype`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Menutype when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(menutypes[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(menutypes[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(menutypes[0]);
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
        .mockResolvedValue(menutypes[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(menutypes[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Menutype`);
        }
      }
    });
  });
});
