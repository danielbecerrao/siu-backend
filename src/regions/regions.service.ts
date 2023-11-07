import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateRegionDto } from './dto/create-region.dto';
import type { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './entities/region.entity';

@Injectable()
export class RegionsService {
  public constructor(
    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>,
  ) {}
  public async create(createRegionDto: CreateRegionDto): Promise<Region> {
    try {
      const region: Region = this.regionRepository.create(createRegionDto);
      return await this.regionRepository.save(region);
    } catch (error) {
      throw new BadRequestException('Error al crear Region', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async findAll(): Promise<Region[]> {
    return this.regionRepository.find();
  }

  public async findOne(id: number): Promise<Region | null> {
    return this.regionRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateRegionDto: UpdateRegionDto,
  ): Promise<Region> {
    const region: Region | null = await this.findOne(id);
    if (!region)
      throw new NotFoundException('Error al actualizar Region', {
        cause: new Error(),
        description: 'Region no encontrado por id',
      });
    try {
      return await this.regionRepository.save(
        Object.assign(region, updateRegionDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Region', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<Region> {
    const region: Region | null = await this.findOne(id);
    if (!region)
      throw new NotFoundException('Error al eliminar Region', {
        cause: new Error(),
        description: 'Region no encontrado por id',
      });
    try {
      return await this.regionRepository.softRemove(region);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Region', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }
}
