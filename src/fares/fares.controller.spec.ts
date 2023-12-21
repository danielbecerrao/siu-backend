import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { PaginateQuery, Paginated } from 'nestjs-paginate';
import { Fare } from './entities/fare.entity';
import type { CreateFareDto } from './dto/create-fare.dto';
import type { UpdateFareDto } from './dto/update-fare.dto';
import { FaresController } from './fares.controller';
import { FaresService } from './fares.service';

describe('FaresController', () => {
  let controller: FaresController;
  let service: FaresService;

  const createFareDto: CreateFareDto = {
    clientId: 1,
    fareTypeId: 1,
    fareCategoryId: 1,
    routeId: 1,
    name: 'Test New',
    description: 'Test New',
  };
  const updateFareDto: UpdateFareDto = {
    clientId: 1,
    fareTypeId: 1,
    fareCategoryId: 1,
    routeId: 1,
    name: 'Test updated New',
    description: 'Test updated New',
  };

  const allFares: Fare[] = [];
  const emptyFares = [];
  for (let i = 1; i < 11; i++) {
    const fare: Fare = new Fare();
    fare.id = i;
    fare.name = `TestFare${i}`;
    allFares.push(fare);
  }

  const query: PaginateQuery = {
    path: '',
    page: 1,
    limit: 10,
    select: [''],
    sortBy: [['id', 'ASC']],
  };

  const paginatedFares: Paginated<Fare> = {
    data: allFares,
    meta: {
      totalItems: Number(allFares.length),
      itemsPerPage: Number(query.limit),
      totalPages: Math.ceil(emptyFares.length / Number(query.limit)),
      currentPage: Number(query.page),
      sortBy: [['id', 'ASC']],
      searchBy: ['name', 'description'],
      search: 'TestFare',
      select: ['id', 'name'],
      filter: {
        name: 'TestFare',
      },
    },
    links: {
      first: '',
      previous: '',
      current: '',
      next: '',
      last: '',
    },
  };

  const paginatedEmptyFares: Paginated<Fare> = {
    data: emptyFares,
    meta: {
      totalItems: emptyFares.length,
      itemsPerPage: Number(query.limit),
      totalPages: Math.ceil(emptyFares.length / Number(query.limit)),
      currentPage: Number(query.page),
      sortBy: [['id', 'ASC']],
      searchBy: ['name', 'description'],
      search: 'TestFare',
      select: ['id', 'name'],
      filter: {
        name: 'TestFare',
      },
    },
    links: {
      first: '',
      previous: '',
      current: '',
      next: '',
      last: '',
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaresController],
      providers: [
        FaresService,
        {
          provide: getRepositoryToken(Fare),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<FaresController>(FaresController);
    service = module.get<FaresService>(FaresService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Fare', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(allFares[0]);
      const result = await controller.create(createFareDto);
      expect(createSpy).toHaveBeenCalledWith(createFareDto);
      expect(result).toEqual(allFares[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Fare', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(paginatedFares);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(allFares);
    });

    it('should return an empty array of Fare', async () => {
      const emptyFares = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(paginatedEmptyFares);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptyFares);
    });
  });

  describe('findOne', () => {
    it('should return a New when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(allFares[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(allFares[0]);
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
    it('should update a New', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(allFares[0]);
      const result = await controller.update(id, updateFareDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateFareDto);
      expect(result).toEqual(allFares[0]);
    });
  });

  describe('delete', () => {
    it('should delete a New', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(allFares[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(allFares[0]);
    });
  });
});
