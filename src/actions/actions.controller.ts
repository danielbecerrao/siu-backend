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
import { ActionsService } from './actions.service';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import type { Action } from './entities/action.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('actions')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Acciones')
@ApiBearerAuth()
export class ActionsController {
  public constructor(private readonly actionsService: ActionsService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Action'))
  public async create(
    @Body() createActionDto: CreateActionDto,
  ): Promise<Action> {
    return this.actionsService.create(createActionDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Action'))
  public async findAll(): Promise<Action[]> {
    return this.actionsService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Action'))
  public async findOne(@Param('id') id: string): Promise<Action | null> {
    return this.actionsService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Action'))
  public async update(
    @Param('id') id: string,
    @Body() updateActionDto: UpdateActionDto,
  ): Promise<Action> {
    return this.actionsService.update(+id, updateActionDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Action'))
  public async remove(@Param('id') id: string): Promise<Action> {
    return this.actionsService.remove(+id);
  }
}
