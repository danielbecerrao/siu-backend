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
import { FilesService } from '../files/files.service';
@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(User)
    public readonly userRepository: Repository<User>,
    private readonly filesService: FilesService,
    private readonly dataSource: DataSource,
  ) {}

  public async addUrl(user: User): Promise<User> {
    const signedUrl: string = await this.filesService.getPresignedUrl(
      'img_users',
      user.profilePicture,
      user.id,
    );
    user['url'] = signedUrl;
    return user;
  }

  public async addUrlArray(users: User[]): Promise<User[]> {
    return Promise.all(
      users.map(async (user: User) => {
        return this.addUrl(user);
      }),
    );
  }

  public async create(
    createUserDto: CreateUserDto,
    profilePictureFile?: Express.Multer.File,
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
      if (profilePictureFile) {
        await this.filesService.upload(
          profilePictureFile.buffer,
          profilePictureFile.originalname,
          'img_users',
          newUser.id,
        );
        user.profilePicture = profilePictureFile.originalname;
        await queryRunner.manager.save(user);
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
    return this.addUrlArray(users);
  }

  public async findOne(id: number): Promise<User | null> {
    const user: User | null = await this.userRepository.findOneBy({
      id,
    });
    if (!user) return null;
    return this.addUrl(user);
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

  public async update(
    id: number,
    updateUserDto: UpdateUserDto,
    profilePictureFile?: Express.Multer.File,
  ): Promise<User | null> {
    const user: User | null = await this.findOne(id);
    if (!user)
      throw new NotFoundException('Error al actualizar el usuario', {
        cause: new Error(),
        description: 'Usuario no encontrado por id',
      });
    if (updateUserDto.username && user.username !== updateUserDto.username) {
      const existUser = await this.findOneByUsername(updateUserDto.username);
      if (existUser)
        throw new ConflictException('Error al actualizar usuario', {
          cause: new Error(),
          description: 'Ya existe un usuario con este username',
        });
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.update(User, id, {
        ...updateUserDto,
      });
      if (profilePictureFile) {
        await this.filesService.upload(
          profilePictureFile.buffer,
          profilePictureFile.originalname,
          'img_users',
          id,
        );
        await queryRunner.manager.update(User, id, {
          profilePicture: profilePictureFile.originalname,
        });
      }
      await queryRunner.commitTransaction();
      return this.findOne(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException('Error al actualizar Usuario', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    } finally {
      await queryRunner.release();
    }
  }

  public async selfUpdate(
    updateUserDto: UpdateUserDto,
    user: User,
    profilePictureFile?: Express.Multer.File,
  ): Promise<User | null> {
    return this.update(user.id, updateUserDto, profilePictureFile);
  }

  public async register(
    registerUsterDto: RegisterUserDto,
    profilePictureFile?: Express.Multer.File,
  ): Promise<User> {
    const createUserDto: CreateUserDto = new CreateUserDto();
    Object.assign(createUserDto, registerUsterDto);
    createUserDto.roleId = 2;
    return this.create(createUserDto, profilePictureFile);
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
