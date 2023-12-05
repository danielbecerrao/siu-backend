import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PreferenceToUser } from './entities/preference-to-user.entity';
import type { CreatePreferenceToUserDto } from './dto/create-preference-to-user';
import type { UpdatePreferenceToUserDto } from './dto/update-preference-to-users';

@Injectable()
export class PreferencesToUsersService {
  public constructor(
    @InjectRepository(PreferenceToUser)
    public readonly PreferenceToUserRepository: Repository<PreferenceToUser>,
  ) {}

  public async create(
    createPreferenceDto: CreatePreferenceToUserDto,
  ): Promise<PreferenceToUser> {
    try {
      const preferenceToUser: PreferenceToUser =
        this.PreferenceToUserRepository.create(createPreferenceDto);
      return await this.PreferenceToUserRepository.save(preferenceToUser);
    } catch (error) {
      throw new BadRequestException(
        'Error al crear la preferencia a el usuario',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}`,
        },
      );
    }
  }

  public async findAll(): Promise<PreferenceToUser[]> {
    return this.PreferenceToUserRepository.find();
  }

  public async findOne(id: number): Promise<PreferenceToUser | null> {
    return this.PreferenceToUserRepository.findOneBy({
      id,
    });
  }

  public async update(
    id: number,
    updatePreferenceToUserDto: UpdatePreferenceToUserDto,
  ): Promise<PreferenceToUser> {
    const PreferenceToUser: PreferenceToUser | null = await this.findOne(id);
    if (!PreferenceToUser)
      throw new NotFoundException(
        'Error al actualizar la preferencia a el usuario',
        {
          cause: new Error(),
          description: 'Preferencia a el usuario no encontrado por id',
        },
      );

    try {
      return await this.PreferenceToUserRepository.save(
        Object.assign(PreferenceToUser, updatePreferenceToUserDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar la preferencia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<PreferenceToUser> {
    const PreferenceToUser: PreferenceToUser | null = await this.findOne(id);
    if (!PreferenceToUser)
      throw new NotFoundException('Error al eliminar la preferencia', {
        cause: new Error(),
        description: 'Preferencia a el usuario no encontrado por id',
      });
    try {
      return await this.PreferenceToUserRepository.softRemove(PreferenceToUser);
    } catch (error) {
      throw new BadRequestException(
        'Error al eliminar la preferencia a el usuario',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}`,
        },
      );
    }
  }
}
