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
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import type { Region } from './entities/region.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('regions')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Regiones')
@ApiBearerAuth()
export class RegionsController {
  public constructor(private readonly regionsService: RegionsService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Region'))
  public async create(
    @Body() createRegionDto: CreateRegionDto,
  ): Promise<Region> {
    return this.regionsService.create(createRegionDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Region'))
  public async findAll(): Promise<Region[]> {
    return this.regionsService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Region'))
  public async findOne(@Param('id') id: string): Promise<Region | null> {
    return this.regionsService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Region'))
  public async update(
    @Param('id') id: string,
    @Body() updateRegionDto: UpdateRegionDto,
  ): Promise<Region> {
    return this.regionsService.update(+id, updateRegionDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Region'))
  public async remove(@Param('id') id: string): Promise<Region> {
    return this.regionsService.remove(+id);
  }
}
