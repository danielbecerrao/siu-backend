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
import { OptionsService } from './options.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import type { Option } from './entities/option.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('options')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Opciones')
@ApiBearerAuth()
export class OptionsController {
  public constructor(private readonly optionsService: OptionsService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Option'))
  public async create(
    @Body() createOptionDto: CreateOptionDto,
  ): Promise<Option> {
    return this.optionsService.create(createOptionDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Option'))
  public async findAll(): Promise<Option[]> {
    return this.optionsService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Option'))
  public async findOne(@Param('id') id: string): Promise<Option | null> {
    return this.optionsService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Option'))
  public async update(
    @Param('id') id: string,
    @Body() updateOptionDto: UpdateOptionDto,
  ): Promise<Option> {
    return this.optionsService.update(+id, updateOptionDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Option'))
  public async remove(@Param('id') id: string): Promise<Option> {
    return this.optionsService.remove(+id);
  }
}
