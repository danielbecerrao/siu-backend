import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  public constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}
  public async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    try {
      const profile: Profile = this.profileRepository.create(createProfileDto);
      return await this.profileRepository.save(profile);
    } catch (error) {
      throw new BadRequestException('Error al crear Profile', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  public async findOne(id: number): Promise<Profile | null> {
    return this.profileRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    const profile: Profile | null = await this.findOne(id);
    if (!profile)
      throw new NotFoundException('Error al actualizar Profile', {
        cause: new Error(),
        description: 'Profile no encontrado por id',
      });
    try {
      return await this.profileRepository.save(
        Object.assign(profile, updateProfileDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Profile', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Profile> {
    const profile: Profile | null = await this.findOne(id);
    if (!profile)
      throw new NotFoundException('Error al eliminar Profile', {
        cause: new Error(),
        description: 'Profile no encontrado por id',
      });
    try {
      return await this.profileRepository.softRemove(profile);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Profile', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
