import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

describe('ProfilesController', () => {
  let controller: ProfilesController;
  let service: ProfilesService;

  const createProfileDto: CreateProfileDto = {
    name: 'Test Profile',
  };
  const updateProfileDto: UpdateProfileDto = {
    name: 'Test update Profile',
  };

  const profiles: Profile[] = [];
  for (let i = 1; i < 11; i++) {
    const profile: Profile = new Profile();
    profile.id = i;
    profile.name = `TestProfile${i}`;
    profiles.push(profile);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfilesController],
      providers: [
        ProfilesService,
        {
          provide: getRepositoryToken(Profile),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<ProfilesController>(ProfilesController);
    service = module.get<ProfilesService>(ProfilesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Profile', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(profiles[0]);
      const result = await controller.create(createProfileDto);
      expect(createSpy).toHaveBeenCalledWith(createProfileDto);
      expect(result).toEqual(profiles[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Profiles', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(profiles);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(profiles);
    });

    it('should return an empty array of Profiles', async () => {
      const emptyProfiles = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptyProfiles);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyProfiles);
    });
  });

  describe('findOne', () => {
    it('should return a Profile when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(profiles[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(profiles[0]);
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
    it('should update a Profile', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(profiles[0]);
      const result = await controller.update(id, updateProfileDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateProfileDto);
      expect(result).toEqual(profiles[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Profile', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(profiles[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(profiles[0]);
    });
  });
});
