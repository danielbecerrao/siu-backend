import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import type { UpdateUserDto } from './dto/update-user.dto';
import type { RegisterUserDto } from './dto/register-user.dto';
import { FilesService } from 'src/files/files.service';
@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(User)
    public readonly userRepository: Repository<User>,
    private readonly filesService: FilesService,
    private readonly dataSource: DataSource,
  ) {}

  public async userResponse(user: User): Promise<User> {
    const signedUrl: string = await this.filesService.getPresignedUrl(
      'img_users',
      user.profilePicture,
      user.id,
    );
    user['url'] = signedUrl;
    return user;
  }

  public async userResponseArray(users: User[]): Promise<User[]> {
    return Promise.all(
      users.map(async (user: User) => {
        return this.userResponse(user);
      }),
    );
  }

  public async create(
    createUserDto: CreateUserDto,
    profilePicture?: Express.Multer.File,
  ): Promise<User> {
    const existUser = await this.findOneByUsername(createUserDto.username);
    if (existUser)
      throw new ConflictException('Error al crear usuario', {
        cause: new Error(),
        description: 'Ya existe un usuario con este username',
      });
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const user: User = this.userRepository.create(createUserDto);
      const newUser: User = await queryRunner.manager.save(user);
      if (profilePicture) {
        await this.filesService.upload(profilePicture, 'img_users', newUser.id);
        user.profilePicture = profilePicture.originalname;
      }
      await queryRunner.commitTransaction();
      return newUser;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException('Error al crear Usuario', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    } finally {
      await queryRunner.release();
    }
  }

  public async findAll(): Promise<User[]> {
    const users: User[] = await this.userRepository.find();
    return this.userResponseArray(users);
  }

  public async findOne(id: number): Promise<User | null> {
    const user: User | null = await this.userRepository.findOneBy({
      id,
    });
    if (!user) return null;
    return this.userResponse(user);
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

  public async register(
    registerUsterDto: RegisterUserDto,
    profilePicture?: Express.Multer.File,
  ): Promise<User> {
    const createUserDto: CreateUserDto = new CreateUserDto();
    Object.assign(createUserDto, registerUsterDto);
    createUserDto.roleId = 2;
    return this.create(createUserDto, profilePicture);
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
