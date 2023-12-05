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
import { LabelsService } from './labels.service';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';
import type { Label } from './entities/label.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('labels')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Etiquetas')
@ApiBearerAuth()
export class LabelsController {
  public constructor(private readonly labelsService: LabelsService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Label'))
  public async create(@Body() createLabelDto: CreateLabelDto): Promise<Label> {
    return this.labelsService.create(createLabelDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Label'))
  public async findAll(): Promise<Label[]> {
    return this.labelsService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Label'))
  public async findOne(@Param('id') id: string): Promise<Label | null> {
    return this.labelsService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Label'))
  public async update(
    @Param('id') id: string,
    @Body() updateLabelDto: UpdateLabelDto,
  ): Promise<Label> {
    return this.labelsService.update(+id, updateLabelDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Label'))
  public async remove(@Param('id') id: string): Promise<Label> {
    return this.labelsService.remove(+id);
  }
}
