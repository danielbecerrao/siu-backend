import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilesService } from './profiles.service';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

describe('ProfilesService', () => {
  let service: ProfilesService;
  let repository: Repository<Profile>;

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
      providers: [
        ProfilesService,
        {
          provide: getRepositoryToken(Profile),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ProfilesService>(ProfilesService);
    repository = module.get<Repository<Profile>>(getRepositoryToken(Profile));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a profile', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(profiles[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(profiles[0]);
      const result = await service.create(createProfileDto);
      expect(createSpy).toHaveBeenCalledWith(createProfileDto);
      expect(saveSpy).toHaveBeenCalledWith(profiles[0]);
      expect(result).toEqual(profiles[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(profiles[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createProfileDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(profiles[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Profile`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createProfileDto);
      expect(saveSpy).toHaveBeenCalledWith(profiles[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Profiles', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(profiles);
      const result = await service.findAll();
      expect(result).toEqual(profiles);
    });

    it('should return an empty array of Profiles', async () => {
      const emptyProfiles: Profile[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptyProfiles);
      const result = await service.findAll();
      expect(result).toEqual(emptyProfiles);
    });
  });

  describe('findOne', () => {
    it('should return a Profile object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(profiles[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(profiles[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a profile', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(profiles[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(profiles[0]);

      const result = await service.update(id, updateProfileDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...profiles[0],
        ...updateProfileDto,
      });

      expect(result).toEqual({
        ...profiles[0],
        ...updateProfileDto,
      });
    });

    it('should throw NotFoundException when profile does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateProfileDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(profiles[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateProfileDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...profiles[0],
          ...updateProfileDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Profile`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Profile when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(profiles[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(profiles[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(profiles[0]);
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
        .mockResolvedValue(profiles[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(profiles[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Profile`);
        }
      }
    });
  });
});
