import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubjectsController } from './subjects.controller';
import { SubjectsService } from './subjects.service';
import type { CreateSubjectDto } from './dto/create-subject.dto';
import type { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';

describe('SubjectsController', () => {
  let controller: SubjectsController;
  let service: SubjectsService;
  let caslAbilityFactory: CaslAbilityFactory;

  const createSubjectDto: CreateSubjectDto = {
    name: 'Test Subject',
  };
  const updateSubjectDto: UpdateSubjectDto = {
    name: 'Test update Subject',
  };

  const subjects: Subject[] = [];
  for (let i = 1; i < 11; i++) {
    const subject: Subject = new Subject();
    subject.id = i;
    subject.name = `TestSubject${i}`;
    subjects.push(subject);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectsController],
      providers: [
        SubjectsService,
        CaslAbilityFactory,
        {
          provide: getRepositoryToken(Subject),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<SubjectsController>(SubjectsController);
    service = module.get<SubjectsService>(SubjectsService);
    caslAbilityFactory = module.get<CaslAbilityFactory>(CaslAbilityFactory);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new Subject', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValue(subjects[0]);
      const result = await controller.create(createSubjectDto);
      expect(createSpy).toHaveBeenCalledWith(createSubjectDto);
      expect(result).toEqual(subjects[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Subjects', async () => {
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(subjects);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(subjects);
    });

    it('should return an empty array of Subjects', async () => {
      const emptySubjects = [];
      const findAllSpy = jest
        .spyOn(service, 'findAll')
        .mockResolvedValue(emptySubjects);
      const result = await controller.findAll();
      expect(findAllSpy).toHaveBeenCalled();
      expect(result).toEqual(emptySubjects);
    });
  });

  describe('findOne', () => {
    it('should return a Subject when a valid ID is provided', async () => {
      const id = '1';
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(subjects[0]);
      const result = await controller.findOne(id);
      expect(findOneSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(subjects[0]);
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
    it('should update a Subject', async () => {
      const id = '1';

      const updateSpy = jest
        .spyOn(service, 'update')
        .mockResolvedValue(subjects[0]);
      const result = await controller.update(id, updateSubjectDto);
      expect(updateSpy).toHaveBeenCalledWith(+id, updateSubjectDto);
      expect(result).toEqual(subjects[0]);
    });
  });

  describe('delete', () => {
    it('should delete a Subject', async () => {
      const id = '1';

      const removeSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValue(subjects[0]);
      const result = await controller.remove(id);
      expect(removeSpy).toHaveBeenCalledWith(+id);
      expect(result).toEqual(subjects[0]);
    });
  });
});
