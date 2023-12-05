import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OptiontypesService } from './optiontypes.service';
import type { CreateOptiontypeDto } from './dto/create-optiontype.dto';
import type { UpdateOptiontypeDto } from './dto/update-optiontype.dto';
import { Optiontype } from './entities/optiontype.entity';

describe('OptiontypesService', () => {
  let service: OptiontypesService;
  let repository: Repository<Optiontype>;

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
      providers: [
        OptiontypesService,
        {
          provide: getRepositoryToken(Optiontype),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<OptiontypesService>(OptiontypesService);
    repository = module.get<Repository<Optiontype>>(getRepositoryToken(Optiontype));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a optiontype', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(optiontypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(optiontypes[0]);
      const result = await service.create(createOptiontypeDto);
      expect(createSpy).toHaveBeenCalledWith(createOptiontypeDto);
      expect(saveSpy).toHaveBeenCalledWith(optiontypes[0]);
      expect(result).toEqual(optiontypes[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(optiontypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createOptiontypeDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(optiontypes[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Optiontype`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createOptiontypeDto);
      expect(saveSpy).toHaveBeenCalledWith(optiontypes[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Optiontypes', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(optiontypes);
      const result = await service.findAll();
      expect(result).toEqual(optiontypes);
    });

    it('should return an empty array of Optiontypes', async () => {
      const emptyOptiontypes: Optiontype[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyOptiontypes);
      const result = await service.findAll();
      expect(result).toEqual(emptyOptiontypes);
    });
  });

  describe('findOne', () => {
    it('should return a Optiontype object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(optiontypes[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(optiontypes[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a optiontype', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(optiontypes[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(optiontypes[0]);

      const result = await service.update(id, updateOptiontypeDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...optiontypes[0],
        ...updateOptiontypeDto,
      });

      expect(result).toEqual({
        ...optiontypes[0],
        ...updateOptiontypeDto,
      });
    });

    it('should throw NotFoundException when optiontype does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateOptiontypeDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(optiontypes[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateOptiontypeDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...optiontypes[0],
          ...updateOptiontypeDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Optiontype`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Optiontype when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(optiontypes[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(optiontypes[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(optiontypes[0]);
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
        .mockResolvedValue(optiontypes[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(optiontypes[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Optiontype`);
        }
      }
    });
  });
});
