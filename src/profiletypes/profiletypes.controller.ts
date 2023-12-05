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
import { ProfiletypesService } from './profiletypes.service';
import { CreateProfiletypeDto } from './dto/create-profiletype.dto';
import { UpdateProfiletypeDto } from './dto/update-profiletype.dto';
import type { Profiletype } from './entities/profiletype.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('profiletypes')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Tipos de perfiles')
@ApiBearerAuth()
export class ProfiletypesController {
  public constructor(
    private readonly profiletypesService: ProfiletypesService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Profiletype'))
  public async create(
    @Body() createProfiletypeDto: CreateProfiletypeDto,
  ): Promise<Profiletype> {
    return this.profiletypesService.create(createProfiletypeDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Profiletype'))
  public async findAll(): Promise<Profiletype[]> {
    return this.profiletypesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Profiletype'))
  public async findOne(@Param('id') id: string): Promise<Profiletype | null> {
    return this.profiletypesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Profiletype'))
  public async update(
    @Param('id') id: string,
    @Body() updateProfiletypeDto: UpdateProfiletypeDto,
  ): Promise<Profiletype> {
    return this.profiletypesService.update(+id, updateProfiletypeDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Profiletype'))
  public async remove(@Param('id') id: string): Promise<Profiletype> {
    return this.profiletypesService.remove(+id);
  }
}
