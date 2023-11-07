import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateSubregionDto } from './dto/create-subregion.dto';
import type { UpdateSubregionDto } from './dto/update-subregion.dto';
import { Subregion } from './entities/subregion.entity';

@Injectable()
export class SubregionsService {
  public constructor(
    @InjectRepository(Subregion)
    private readonly subregionRepository: Repository<Subregion>,
  ) {}
  public async create(
    createSubregionDto: CreateSubregionDto,
  ): Promise<Subregion> {
    try {
      const subregion: Subregion =
        this.subregionRepository.create(createSubregionDto);
      return await this.subregionRepository.save(subregion);
    } catch (error) {
      throw new BadRequestException('Error al crear Subregion', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async findAll(): Promise<Subregion[]> {
    return this.subregionRepository.find();
  }

  public async findOne(id: number): Promise<Subregion | null> {
    return this.subregionRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateSubregionDto: UpdateSubregionDto,
  ): Promise<Subregion> {
    const subregion: Subregion | null = await this.findOne(id);
    if (!subregion)
      throw new NotFoundException('Error al actualizar Subregion', {
        cause: new Error(),
        description: 'Subregion no encontrado por id',
      });
    try {
      return await this.subregionRepository.save(
        Object.assign(subregion, updateSubregionDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Subregion', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<Subregion> {
    const subregion: Subregion | null = await this.findOne(id);
    if (!subregion)
      throw new NotFoundException('Error al eliminar Subregion', {
        cause: new Error(),
        description: 'Subregion no encontrado por id',
      });
    try {
      return await this.subregionRepository.softRemove(subregion);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Subregion', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }
}
