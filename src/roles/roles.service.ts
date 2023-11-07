import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateRoleDto } from './dto/create-role.dto';
import type { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  public constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}
  public async create(createRoleDto: CreateRoleDto): Promise<Role> {
    try {
      const role: Role = this.roleRepository.create(createRoleDto);
      return await this.roleRepository.save(role);
    } catch (error) {
      throw new BadRequestException('Error al crear Role', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  public async findOne(id: number): Promise<Role | null> {
    return this.roleRepository.findOneBy({ id });
  }

  public async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role: Role | null = await this.findOne(id);
    if (!role)
      throw new NotFoundException('Error al actualizar Role', {
        cause: new Error(),
        description: 'Role no encontrado por id',
      });
    try {
      return await this.roleRepository.save(Object.assign(role, updateRoleDto));
    } catch (error) {
      throw new BadRequestException('Error al actualizar Role', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<Role> {
    const role: Role | null = await this.findOne(id);
    if (!role)
      throw new NotFoundException('Error al eliminar Role', {
        cause: new Error(),
        description: 'Role no encontrado por id',
      });
    try {
      return await this.roleRepository.softRemove(role);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Role', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }
}
