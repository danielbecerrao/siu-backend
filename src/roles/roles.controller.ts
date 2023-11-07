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
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import type { Role } from './entities/role.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('roles')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Roles')
@ApiBearerAuth()
export class RolesController {
  public constructor(private readonly rolesService: RolesService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Role'))
  public async create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Role'))
  public async findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Role'))
  public async findOne(@Param('id') id: string): Promise<Role | null> {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Role'))
  public async update(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ): Promise<Role> {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Role'))
  public async remove(@Param('id') id: string): Promise<Role> {
    return this.rolesService.remove(+id);
  }
}
