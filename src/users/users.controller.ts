import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';
import { GetUser } from '../common/decorators/user.decorator';
import { RegisterUserDto } from './dto/register-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
@ApiTags('Usuarios')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'User'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('profilePictureFile'))
  public async create(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() profilePictureFile?: Express.Multer.File,
  ): Promise<User> {
    return this.usersService.create(createUserDto, profilePictureFile);
  }

  @Post('register')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('profilePictureFile'))
  public async register(
    @Body() registerUserDto: RegisterUserDto,
    @UploadedFile() profilePictureFile?: Express.Multer.File,
  ): Promise<User> {
    return this.usersService.register(registerUserDto, profilePictureFile);
  }

  @Get()
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'User'))
  public async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('current')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'User'))
  public async current(@GetUser() user: User): Promise<User | null> {
    return this.usersService.current(user);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'User'))
  @ApiBearerAuth()
  public async findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('profilePictureFile'))
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'User'))
  public async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile() profilePictureFile?: Express.Multer.File,
  ): Promise<User | null> {
    return this.usersService.update(+id, updateUserDto, profilePictureFile);
  }

  @Patch('self')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'User'))
  public async selfUpdate(
    @Body() updateUserDto: UpdateUserDto,
    @GetUser() user: User,
    @UploadedFile() profilePictureFile?: Express.Multer.File,
  ): Promise<User | null> {
    return this.usersService.selfUpdate(
      updateUserDto,
      user,
      profilePictureFile,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'User'))
  public async remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(+id);
  }
}
