import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreatePermissionDto } from './dto/create-permission.dto';
import type { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionsService {
  public constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}
  public async create(
    createPermissionDto: CreatePermissionDto,
  ): Promise<Permission> {
    try {
      const permission: Permission =
        this.permissionRepository.create(createPermissionDto);
      return await this.permissionRepository.save(permission);
    } catch (error) {
      throw new BadRequestException('Error al crear Permiso', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async findAll(): Promise<Permission[]> {
    return this.permissionRepository.find();
  }
  public async findOne(id: number): Promise<Permission | null> {
    return this.permissionRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updatePermissionDto: UpdatePermissionDto,
  ): Promise<Permission> {
    const permission: Permission | null = await this.findOne(id);
    if (!permission)
      throw new NotFoundException('Error al actualizar Permiso', {
        cause: new Error(),
        description: 'Permiso no encontrado por id',
      });
    try {
      return await this.permissionRepository.save(
        Object.assign(permission, updatePermissionDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Permiso', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<Permission> {
    const permission: Permission | null = await this.findOne(id);
    if (!permission)
      throw new NotFoundException('Error al eliminar Permiso', {
        cause: new Error(),
        description: 'Permiso no encontrado por id',
      });
    try {
      return await this.permissionRepository.softRemove(permission);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Permiso', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }
}
