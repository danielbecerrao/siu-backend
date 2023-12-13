import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import type { CreateUserDto } from './dto/create-user.dto';
import type { UpdateUserDto } from './dto/update-user.dto';
import type { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(User)
    public readonly userRepository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const existUser = await this.findOneByUsername(createUserDto.username);
    if (existUser)
      throw new ConflictException('Error al crear usuario', {
        cause: new Error(),
        description: 'Ya existe un usuario con este username',
      });
    try {
      const user: User = this.userRepository.create(createUserDto);
      return await this.userRepository.save(user);
    } catch (error) {
      throw new BadRequestException('Error al crear Usuario', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({
      id,
    });
  }

  public async current(user: User): Promise<User | null> {
    return this.findOne(user.id);
  }

  public async findOneByUsername(username: string): Promise<User | null> {
    return this.userRepository
      .createQueryBuilder('users')
      .innerJoinAndSelect('users.client', 'client')
      .where('users.username = :username', { username })
      .getOne();
  }

  public async findOnByIdWithPermissions(id: number): Promise<User> {
    return this.userRepository
      .createQueryBuilder('users')
      .innerJoinAndSelect('users.role', 'role')
      .innerJoinAndSelect('role.permissions', 'permissions')
      .innerJoinAndSelect('permissions.subject', 'subject')
      .innerJoinAndSelect('permissions.action', 'action')
      .where('users.id = :id', { id })
      .getOneOrFail();
  }

  public async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User | null = await this.findOne(id);
    if (!user)
      throw new NotFoundException('Error al actualizar el usuario', {
        cause: new Error(),
        description: 'Usuario no encontrado por id',
      });
    try {
      return await this.userRepository.save({ id, ...updateUserDto });
    } catch (error) {
      throw new BadRequestException('Error al actualizar Usuario', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }
  public async selfUpdate(
    updateUserDto: UpdateUserDto,
    user: User,
  ): Promise<User> {
    return this.update(user.id, updateUserDto);
  }

  public async register(registerUsterDto: RegisterUserDto): Promise<User> {
    const existUser = await this.findOneByUsername(registerUsterDto.username);
    if (existUser)
      throw new ConflictException('Error al crear usuario', {
        cause: new Error(),
        description: 'Ya existe un usuario con este username',
      });
    try {
      const user: User = this.userRepository.create(registerUsterDto);
      user.roleId = 2;
      return await this.userRepository.save(user);
    } catch (error) {
      throw new BadRequestException('Error al crear Usuario', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<User> {
    const user: User | null = await this.findOne(id);
    if (!user)
      throw new NotFoundException('Error al eliminar el usuario', {
        cause: new Error(),
        description: 'Usuario no encontrado por id',
      });
    try {
      return await this.userRepository.softRemove(user);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Usuario', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }
}
