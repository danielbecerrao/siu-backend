import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubjectsService } from './subjects.service';
import type { CreateSubjectDto } from './dto/create-subject.dto';
import type { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';

describe('SubjectsService', () => {
  let service: SubjectsService;
  let repository: Repository<Subject>;

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
      providers: [
        SubjectsService,
        {
          provide: getRepositoryToken(Subject),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<SubjectsService>(SubjectsService);
    repository = module.get<Repository<Subject>>(getRepositoryToken(Subject));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a subject', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(subjects[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(subjects[0]);
      const result = await service.create(createSubjectDto);
      expect(createSpy).toHaveBeenCalledWith(createSubjectDto);
      expect(saveSpy).toHaveBeenCalledWith(subjects[0]);
      expect(result).toEqual(subjects[0]);
    });

    it('should throw a BadRequestException when there is a server error during creation', async () => {
      const createSpy = jest
        .spyOn(repository, 'create')
        .mockReturnValue(subjects[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.create(createSubjectDto);
      } catch (error) {
        expect(saveSpy).toHaveBeenCalledWith(subjects[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al crear Subject`);
        }
      }
      expect(createSpy).toHaveBeenCalledWith(createSubjectDto);
      expect(saveSpy).toHaveBeenCalledWith(subjects[0]);
    });
  });

  describe('findAll', () => {
    it('should return an array of Subjects', async () => {
      jest.spyOn(repository, 'find').mockResolvedValue(subjects);
      const result = await service.findAll();
      expect(result).toEqual(subjects);
    });

    it('should return an empty array of Subjects', async () => {
      const emptySubjects: Subject[] = [];
      jest.spyOn(repository, 'find').mockResolvedValue(emptySubjects);
      const result = await service.findAll();
      expect(result).toEqual(emptySubjects);
    });
  });

  describe('findOne', () => {
    it('should return a Subject object when a valid id is passed', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(subjects[0]);
      const id = 1;
      const result = await service.findOne(+id);
      expect(result).toEqual(subjects[0]);
    });

    it('should return null when an invalid ID is provided', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValue(null);
      const id = 12;
      const result = await service.findOne(+id);

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a subject', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(subjects[0]);

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue(subjects[0]);

      const result = await service.update(id, updateSubjectDto);

      expect(findOneSpy).toHaveBeenCalledWith(id);

      expect(saveSpy).toHaveBeenCalledWith({
        ...subjects[0],
        ...updateSubjectDto,
      });

      expect(result).toEqual({
        ...subjects[0],
        ...updateSubjectDto,
      });
    });

    it('should throw NotFoundException when subject does not exist', async () => {
      const id = 12;
      const findOneSpy = jest.spyOn(service, 'findOne').mockResolvedValue(null);
      await expect(service.update(+id, updateSubjectDto)).rejects.toThrowError(
        NotFoundException,
      );
      expect(findOneSpy).toHaveBeenCalledWith(id);
    });

    it('should throw a BadRequestException when there is a server error during updation', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(subjects[0]);
      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockRejectedValue(new Error('Error de servidor'));
      try {
        await service.update(+id, updateSubjectDto);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(saveSpy).toHaveBeenCalledWith({
          ...subjects[0],
          ...updateSubjectDto,
        });
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al actualizar Subject`);
        }
      }
    });
  });

  describe('remove', () => {
    it('should remove a Subject when a valid ID is provided', async () => {
      const id = 1;
      const findOneSpy = jest
        .spyOn(service, 'findOne')
        .mockResolvedValue(subjects[0]);
      jest.spyOn(repository, 'softRemove').mockResolvedValue(subjects[0]);

      const result = await service.remove(+id);
      expect(findOneSpy).toHaveBeenCalledWith(id);
      expect(result).toEqual(subjects[0]);
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
        .mockResolvedValue(subjects[0]);

      const softRemoveSpy = jest
        .spyOn(repository, 'softRemove')
        .mockRejectedValue(new Error('Error de servidor'));

      try {
        await service.remove(+id);
        fail('Service did throw BadRequestException');
      } catch (error) {
        expect(findOneSpy).toHaveBeenCalledWith(id);

        expect(softRemoveSpy).toHaveBeenCalledWith(subjects[0]);
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Error al eliminar Subject`);
        }
      }
    });
  });
});
