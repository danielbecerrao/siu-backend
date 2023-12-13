import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { File } from './entities/file.entity';
import type { CreateFileDto } from './dto/create-file.dto';
import type { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FilesService {
  public constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
    private readonly dataSource: DataSource,
  ) {}
  public async create(createFileDto: CreateFileDto): Promise<File> {
    try {
      const file: File = this.fileRepository.create(createFileDto);
      return await this.fileRepository.save(file);
    } catch (error) {
      throw new BadRequestException('Error al crear el Archivo', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<File[]> {
    return this.fileRepository.find();
  }

  public async findOne(id: number): Promise<File | null> {
    return this.fileRepository.findOneBy({ id });
  }

  public async update(id: number, updateFileDto: UpdateFileDto): Promise<File> {
    const file: File | null = await this.findOne(id);
    if (!file)
      throw new NotFoundException('Error al actualizar el Archivo', {
        cause: new Error(),
        description: 'Archivo de la noticia no encontrada por id',
      });
    try {
      return await this.fileRepository.save(Object.assign(file, updateFileDto));
    } catch (error) {
      throw new BadRequestException('Error al actualizar el Archivo', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<File> {
    const newsImage: File | null = await this.findOne(id);
    if (!newsImage)
      throw new NotFoundException('Error al eliminar el Archivo', {
        cause: new Error(),
        description: 'Archivo de la noticia no encontrado por id',
      });
    try {
      return await this.fileRepository.softRemove(newsImage);
    } catch (error) {
      throw new BadRequestException(
        'Error al eliminar el Archivo de la noticia',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}}`,
        },
      );
    }
  }
}
