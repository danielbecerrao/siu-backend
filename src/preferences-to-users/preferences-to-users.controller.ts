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
import { CreatePreferenceToUserDto } from './dto/create-preference-to-user';
import { UpdatePreferenceToUserDto } from './dto/update-preference-to-users';
import type { PreferenceToUser } from './entities/preference-to-user.entity';
import { PreferencesToUsersService } from './preferences-to-users.service';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('preferences-to-users')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Preferencias a el usuario')
@ApiBearerAuth()
export class PreferencesToUsersController {
  public constructor(
    private readonly preferencesToUsersService: PreferencesToUsersService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Create', 'PreferenceToUser'),
  )
  public async create(
    @Body()
    createPreferenceToUserDto: CreatePreferenceToUserDto,
  ): Promise<PreferenceToUser> {
    return this.preferencesToUsersService.create(createPreferenceToUserDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Read', 'PreferenceToUser'),
  )
  public async findAll(): Promise<PreferenceToUser[]> {
    return this.preferencesToUsersService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Read', 'PreferenceToUser'),
  )
  public async findOne(
    @Param('id') id: string,
  ): Promise<PreferenceToUser | null> {
    return this.preferencesToUsersService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Update', 'PreferenceToUser'),
  )
  public async update(
    @Param('id') id: string,
    @Body() updatePreferenceToUserDto: UpdatePreferenceToUserDto,
  ): Promise<PreferenceToUser> {
    return this.preferencesToUsersService.update(
      +id,
      updatePreferenceToUserDto,
    );
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Delete', 'PreferenceToUser'),
  )
  public async remove(@Param('id') id: string): Promise<PreferenceToUser> {
    return this.preferencesToUsersService.remove(+id);
  }
}
