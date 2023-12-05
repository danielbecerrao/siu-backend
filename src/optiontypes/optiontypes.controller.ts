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
import { OptiontypesService } from './optiontypes.service';
import { CreateOptiontypeDto } from './dto/create-optiontype.dto';
import { UpdateOptiontypeDto } from './dto/update-optiontype.dto';
import type { OptionType } from './entities/optiontype.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('optiontypes')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Tipos de opciones')
@ApiBearerAuth()
export class OptiontypesController {
  public constructor(private readonly optiontypesService: OptiontypesService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Optiontype'))
  public async create(
    @Body() createOptiontypeDto: CreateOptiontypeDto,
  ): Promise<OptionType> {
    return this.optiontypesService.create(createOptiontypeDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Optiontype'))
  public async findAll(): Promise<OptionType[]> {
    return this.optiontypesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Optiontype'))
  public async findOne(@Param('id') id: string): Promise<OptionType | null> {
    return this.optiontypesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Optiontype'))
  public async update(
    @Param('id') id: string,
    @Body() updateOptiontypeDto: UpdateOptiontypeDto,
  ): Promise<OptionType> {
    return this.optiontypesService.update(+id, updateOptiontypeDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Optiontype'))
  public async remove(@Param('id') id: string): Promise<OptionType> {
    return this.optiontypesService.remove(+id);
  }
}
