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
import { MpermissionsService } from './mpermissions.service';
import { CreateMpermissionDto } from './dto/create-mpermission.dto';
import { UpdateMpermissionDto } from './dto/update-mpermission.dto';
import type { Mpermission } from './entities/mpermission.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('mpermissions')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Permisos')
@ApiBearerAuth()
export class MpermissionsController {
  public constructor(
    private readonly mpermissionsService: MpermissionsService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Mpermission'))
  public async create(
    @Body() createMpermissionDto: CreateMpermissionDto,
  ): Promise<Mpermission> {
    return this.mpermissionsService.create(createMpermissionDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Mpermission'))
  public async findAll(): Promise<Mpermission[]> {
    return this.mpermissionsService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Mpermission'))
  public async findOne(@Param('id') id: string): Promise<Mpermission | null> {
    return this.mpermissionsService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Mpermission'))
  public async update(
    @Param('id') id: string,
    @Body() updateMpermissionDto: UpdateMpermissionDto,
  ): Promise<Mpermission> {
    return this.mpermissionsService.update(+id, updateMpermissionDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Mpermission'))
  public async remove(@Param('id') id: string): Promise<Mpermission> {
    return this.mpermissionsService.remove(+id);
  }
}
