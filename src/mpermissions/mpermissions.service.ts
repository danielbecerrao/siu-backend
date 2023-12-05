import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateMpermissionDto } from './dto/create-mpermission.dto';
import type { UpdateMpermissionDto } from './dto/update-mpermission.dto';
import { Mpermission } from './entities/mpermission.entity';

@Injectable()
export class MpermissionsService {
  public constructor(
    @InjectRepository(Mpermission)
    private readonly mpermissionRepository: Repository<Mpermission>,
  ) {}
  public async create(
    createMpermissionDto: CreateMpermissionDto,
  ): Promise<Mpermission> {
    try {
      const mpermission: Mpermission =
        this.mpermissionRepository.create(createMpermissionDto);
      return await this.mpermissionRepository.save(mpermission);
    } catch (error) {
      throw new BadRequestException('Error al crear Mpermission', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<Mpermission[]> {
    return this.mpermissionRepository.find();
  }

  public async findOne(id: number): Promise<Mpermission | null> {
    return this.mpermissionRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateMpermissionDto: UpdateMpermissionDto,
  ): Promise<Mpermission> {
    const mpermission: Mpermission | null = await this.findOne(id);
    if (!mpermission)
      throw new NotFoundException('Error al actualizar Mpermission', {
        cause: new Error(),
        description: 'Mpermission no encontrado por id',
      });
    try {
      return await this.mpermissionRepository.save(
        Object.assign(mpermission, updateMpermissionDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Mpermission', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Mpermission> {
    const mpermission: Mpermission | null = await this.findOne(id);
    if (!mpermission)
      throw new NotFoundException('Error al eliminar Mpermission', {
        cause: new Error(),
        description: 'Mpermission no encontrado por id',
      });
    try {
      return await this.mpermissionRepository.softRemove(mpermission);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Mpermission', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
