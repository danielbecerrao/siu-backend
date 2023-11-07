import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';
import type { CreateSiteDto } from './dto/create-site.dto';
import type { UpdateSiteDto } from './dto/update-site.dto';
import { Site } from './entities/site.entity';

describe('SitesController', () => {
  let controller: SitesController;
  let service: SitesService;

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
      controllers: [SitesController],
      providers: [
        SitesService,
        {
          provide: getRepositoryToken(Site),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<SitesController>(SitesController);
    service = module.get<SitesService>(SitesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Site', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(sites[0]);
      const result = await controller.create(createSiteDto);
      expect(createSpy).toHaveBeenCalledWith(createSiteDto);
      expect(result).toEqual(sites[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Sites', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(sites);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(sites);
    });

    it('should return an empty array of Sites', async () => {
      const emptySites = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptySites);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptySites);
    });
  });

  describe('findOne', () => {
    it('should return a Site when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(sites[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(sites[0]);
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
    it('should update a Site', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(sites[0]);
      const result = await controller.update(id, updateSiteDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateSiteDto);
      expect(result).toEqual(sites[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Site', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(sites[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(sites[0]);
    });
  });
});
