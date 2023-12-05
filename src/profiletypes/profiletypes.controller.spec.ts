import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfiletypesController } from './profiletypes.controller';
import { ProfiletypesService } from './profiletypes.service';
import type { CreateProfiletypeDto } from './dto/create-profiletype.dto';
import type { UpdateProfiletypeDto } from './dto/update-profiletype.dto';
import { Profiletype } from './entities/profiletype.entity';

describe('ProfiletypesController', () => {
  let controller: ProfiletypesController;
  let service: ProfiletypesService;

  const createProfiletypeDto: CreateProfiletypeDto = {
    name: 'Test Profiletype',
  };
  const updateProfiletypeDto: UpdateProfiletypeDto = {
    name: 'Test update Profiletype',
  };

  const profiletypes: Profiletype[] = [];
  for (let i = 1; i < 11; i++) {
    const profiletype: Profiletype = new Profiletype();
    profiletype.id = i;
    profiletype.name = `TestProfiletype${i}`;
    profiletypes.push(profiletype);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfiletypesController],
      providers: [
        ProfiletypesService,
        {
          provide: getRepositoryToken(Profiletype),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<ProfiletypesController>(ProfiletypesController);
    service = module.get<ProfiletypesService>(ProfiletypesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Profiletype', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(profiletypes[0]);
      const result = await controller.create(createProfiletypeDto);
      expect(createSpy).toHaveBeenCalledWith(createProfiletypeDto);
      expect(result).toEqual(profiletypes[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Profiletypes', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(profiletypes);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(profiletypes);
    });

    it('should return an empty array of Profiletypes', async () => {
      const emptyProfiletypes = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyProfiletypes);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyProfiletypes);
    });
  });

  describe('findOne', () => {
    it('should return a Profiletype when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(profiletypes[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(profiletypes[0]);
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
    it('should update a Profiletype', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(profiletypes[0]);
      const result = await controller.update(id, updateProfiletypeDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateProfiletypeDto);
      expect(result).toEqual(profiletypes[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Profiletype', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(profiletypes[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(profiletypes[0]);
    });
  });
});
