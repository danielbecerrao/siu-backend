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
import { CreatePreferenceDto } from './dto/create.preference.dto';
import { UpdatePreferenceDto } from './dto/update.preference.dto';
import type { Preference } from './entities/preference.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import { PreferencesService } from './preferences.service';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('preferences')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Preferencias')
@ApiBearerAuth()
export class PreferencesController {
  public constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Preference'))
  public async create(
    @Body()
    createPreferenceDto: CreatePreferenceDto,
  ): Promise<Preference> {
    return this.preferencesService.create(createPreferenceDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Preference'))
  public async findAll(): Promise<Preference[]> {
    return this.preferencesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Preference'))
  public async findOne(@Param('id') id: string): Promise<Preference | null> {
    return this.preferencesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Preference'))
  public async update(
    @Param('id') id: string,
    @Body() updatePreferenceDto: UpdatePreferenceDto,
  ): Promise<Preference> {
    return this.preferencesService.update(+id, updatePreferenceDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Preference'))
  public async remove(@Param('id') id: string): Promise<Preference> {
    return this.preferencesService.remove(+id);
  }
}
