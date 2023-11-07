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
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import type { Permission } from './entities/permission.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('permissions')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Permisos')
@ApiBearerAuth()
export class PermissionsController {
  public constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Permission'))
  public async create(
    @Body() createPermissionDto: CreatePermissionDto,
  ): Promise<Permission> {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Permission'))
  public async findAll(): Promise<Permission[]> {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Permission'))
  public async findOne(@Param('id') id: string): Promise<Permission | null> {
    return this.permissionsService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Permission'))
  public async update(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ): Promise<Permission> {
    return this.permissionsService.update(+id, updatePermissionDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Permission'))
  public async remove(@Param('id') id: string): Promise<Permission> {
    return this.permissionsService.remove(+id);
  }
}
