import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Preference } from './entities/Preference.entity';
import type { CreatePreferenceDto } from './dto/create.preference.dto';
import type { UpdatePreferenceDto } from './dto/update.preference.dto';

@Injectable()
export class PreferencesService {
  public constructor(
    @InjectRepository(Preference)
    public readonly PreferenceRepository: Repository<Preference>,
  ) {}

  public async create(
    createPreferenceDto: CreatePreferenceDto,
  ): Promise<Preference> {
    try {
      const preference: Preference =
        this.PreferenceRepository.create(createPreferenceDto);
      return await this.PreferenceRepository.save(preference);
    } catch (error) {
      throw new BadRequestException('Error al crear la preferencia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async findAll(): Promise<Preference[]> {
    return this.PreferenceRepository.find();
  }

  public async findOne(id: number): Promise<Preference | null> {
    return this.PreferenceRepository.findOneBy({
      id,
    });
  }

  public async update(
    id: number,
    updatePreferenceDto: UpdatePreferenceDto,
  ): Promise<Preference> {
    const Preference: Preference | null = await this.findOne(id);
    if (!Preference)
      throw new NotFoundException('Error al actualizar la preferencia', {
        cause: new Error(),
        description: 'Preferencia no encontrado por id',
      });

    try {
      return await this.PreferenceRepository.save(
        Object.assign(Preference, updatePreferenceDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar la preferencia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<Preference> {
    const Preference: Preference | null = await this.findOne(id);
    if (!Preference)
      throw new NotFoundException('Error al eliminar la preferencia', {
        cause: new Error(),
        description: 'Preferencia no encontrado por id',
      });
    try {
      return await this.PreferenceRepository.softRemove(Preference);
    } catch (error) {
      throw new BadRequestException('Error al eliminar preferencia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }
}
