import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateProfiletypeDto } from './dto/create-profiletype.dto';
import type { UpdateProfiletypeDto } from './dto/update-profiletype.dto';
import { Profiletype } from './entities/profiletype.entity';

@Injectable()
export class ProfiletypesService {
  public constructor(
    @InjectRepository(Profiletype)
    private readonly profiletypeRepository: Repository<Profiletype>,
  ) {}
  public async create(
    createProfiletypeDto: CreateProfiletypeDto,
  ): Promise<Profiletype> {
    try {
      const profiletype: Profiletype =
        this.profiletypeRepository.create(createProfiletypeDto);
      return await this.profiletypeRepository.save(profiletype);
    } catch (error) {
      throw new BadRequestException('Error al crear Profiletype', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<Profiletype[]> {
    return this.profiletypeRepository.find();
  }

  public async findOne(id: number): Promise<Profiletype | null> {
    return this.profiletypeRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateProfiletypeDto: UpdateProfiletypeDto,
  ): Promise<Profiletype> {
    const profiletype: Profiletype | null = await this.findOne(id);
    if (!profiletype)
      throw new NotFoundException('Error al actualizar Profiletype', {
        cause: new Error(),
        description: 'Profiletype no encontrado por id',
      });
    try {
      return await this.profiletypeRepository.save(
        Object.assign(profiletype, updateProfiletypeDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Profiletype', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Profiletype> {
    const profiletype: Profiletype | null = await this.findOne(id);
    if (!profiletype)
      throw new NotFoundException('Error al eliminar Profiletype', {
        cause: new Error(),
        description: 'Profiletype no encontrado por id',
      });
    try {
      return await this.profiletypeRepository.softRemove(profiletype);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Profiletype', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
