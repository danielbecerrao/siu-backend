import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import type { Profile } from './entities/profile.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('profiles')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Perfiles')
@ApiBearerAuth()
export class ProfilesController {
  public constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Profile'))
  public async create(
    @Body() createProfileDto: CreateProfileDto,
  ): Promise<Profile> {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Profile'))
  public async findAll(): Promise<Profile[]> {
    return this.profilesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Profile'))
  public async findOne(@Param('id') id: string): Promise<Profile | null> {
    return this.profilesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Profile'))
  public async update(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profilesService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Profile'))
  public async remove(@Param('id') id: string): Promise<Profile> {
    return this.profilesService.remove(+id);
  }
}
