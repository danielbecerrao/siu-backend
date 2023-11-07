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
import { SubregionsService } from './subregions.service';
import { CreateSubregionDto } from './dto/create-subregion.dto';
import { UpdateSubregionDto } from './dto/update-subregion.dto';
import type { Subregion } from './entities/subregion.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('subregions')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Subregiones')
@ApiBearerAuth()
export class SubregionsController {
  public constructor(private readonly subregionsService: SubregionsService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Subregion'))
  public async create(
    @Body() createSubregionDto: CreateSubregionDto,
  ): Promise<Subregion> {
    return this.subregionsService.create(createSubregionDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Subregion'))
  public async findAll(): Promise<Subregion[]> {
    return this.subregionsService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Subregion'))
  public async findOne(@Param('id') id: string): Promise<Subregion | null> {
    return this.subregionsService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Subregion'))
  public async update(
    @Param('id') id: string,
    @Body() updateSubregionDto: UpdateSubregionDto,
  ): Promise<Subregion> {
    return this.subregionsService.update(+id, updateSubregionDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Subregion'))
  public async remove(@Param('id') id: string): Promise<Subregion> {
    return this.subregionsService.remove(+id);
  }
}
