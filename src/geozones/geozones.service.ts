import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { CreateGeozoneDto } from './dto/create-geozone.dto';
import type { UpdateGeozoneDto } from './dto/update-geozone.dto';
import { Geozone } from './entities/geozone.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GeozonesService {
  public constructor(
    @InjectRepository(Geozone)
    private readonly geozoneRepository: Repository<Geozone>,
    private readonly dataSource: DataSource,
  ) {}

  public async create(createGeozoneDto: CreateGeozoneDto): Promise<Geozone> {
    return this.geozoneRepository.create(createGeozoneDto);
  }

  public async findAll(): Promise<Geozone[]> {
    return this.geozoneRepository.find();
  }

  public async findOne(id: number): Promise<Geozone | null> {
    return this.geozoneRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateGeozoneDto: UpdateGeozoneDto,
  ): Promise<Geozone> {
    const geozone: Geozone | null = await this.findOne(+id);
    if (!geozone)
      throw new NotFoundException('Error al actualizar la Geozona', {
        cause: new Error(),
        description: 'Geozona no encontrada por id',
      });
    try {
      return this.geozoneRepository.save(
        Object.assign(geozone, updateGeozoneDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar la Geozona', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Geozone> {
    const geozone: Geozone | null = await this.findOne(+id);
    if (!geozone)
      throw new NotFoundException('Error al eliminar la Geozona', {
        cause: new Error(),
        description: 'Geozona no encontrada por id',
      });
    try {
      return this.geozoneRepository.remove(geozone);
    } catch (error) {
      throw new BadRequestException('Error al eliminar la Geozona', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
