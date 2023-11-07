import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateSubjectDto } from './dto/create-subject.dto';
import type { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectsService {
  public constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}
  public async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    try {
      const subject: Subject = this.subjectRepository.create(createSubjectDto);
      return await this.subjectRepository.save(subject);
    } catch (error) {
      throw new BadRequestException('Error al crear Subject', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async findAll(): Promise<Subject[]> {
    return this.subjectRepository.find();
  }

  public async findOne(id: number): Promise<Subject | null> {
    return this.subjectRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    const subject: Subject | null = await this.findOne(id);
    if (!subject)
      throw new NotFoundException('Error al actualizar Subject', {
        cause: new Error(),
        description: 'Subject no encontrado por id',
      });
    try {
      return await this.subjectRepository.save(
        Object.assign(subject, updateSubjectDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Subject', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<Subject> {
    const subject: Subject | null = await this.findOne(id);
    if (!subject)
      throw new NotFoundException('Error al eliminar Subject', {
        cause: new Error(),
        description: 'Subject no encontrado por id',
      });
    try {
      return await this.subjectRepository.softRemove(subject);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Subject', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }
}
