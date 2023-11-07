import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SitesService } from './sites.service';
import type { CreateSiteDto } from './dto/create-site.dto';
import type { UpdateSiteDto } from './dto/update-site.dto';
import { Site } from './entities/site.entity';

describe('SitesService', () => {
  let service: SitesService;
  let repository: Repository<Site>;

  const createSiteDto: CreateSiteDto = {
    name: 'Test Site',
  };
  const updateSiteDto: UpdateSiteDto = {
    name: 'Test update Site',
  };

  const sites: Site[] = [];
  for (let i = 1; i < 11; i++) {
    const site: Site = new Site();
    site.id = i;
    site.name = `TestSite${i}`;
    sites.push(site);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SitesService,
        {
          provide: getRepositoryToken(Site),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<SitesService>(SitesService);
    repository = module.get<Repository<Site>>(getRepositoryToken(Site));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a site', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(sites[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(sites[0]);
      const result = await service.create(createSiteDto);
      expect(createSpy).toHaveBeenCalledWith(createSiteDto);
      expect(saveSpy).toHaveBeenCalledWith(sites[0]);
      expect(result).toEqual(sites[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(sites[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createSiteDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(sites[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Sitio`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createSiteDto);
      expect(saveSpy).toHaveBeenCalledWith(sites[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Sites', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(sites);
      const result = await service.findAll();
      expect(result).toEqual(sites);
    });

    it('should return an empty array of Sites', async () => {
      const emptySites: Site[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptySites);
      const result = await service.findAll();
      expect(result).toEqual(emptySites);
    });
  });

  describe('findOne', () => {
    it('should return a Site object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(sites[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(sites[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a site', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(sites[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(sites[0]);

      const result = await service.update(id, updateSiteDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...sites[0],
        ...updateSiteDto,
      });

      expect(result).toEqual({
        ...sites[0],
        ...updateSiteDto,
      });
    });

    it('should throw NotFoundException when site does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateSiteDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(sites[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateSiteDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...sites[0],
          ...updateSiteDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Sitio`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Site when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(sites[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(sites[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(sites[0]);
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
        .mockResolvedValue(sites[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(sites[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Sitio`);
        }
      }
    });
  });
});
