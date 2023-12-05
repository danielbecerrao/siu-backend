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
import { MenutypesService } from './menutypes.service';
import { CreateMenutypeDto } from './dto/create-menutype.dto';
import { UpdateMenutypeDto } from './dto/update-menutype.dto';
import type { Menutype } from './entities/menutype.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('menutypes')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Tipos de menús')
@ApiBearerAuth()
export class MenutypesController {
  public constructor(private readonly menutypesService: MenutypesService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Menutype'))
  public async create(
    @Body() createMenutypeDto: CreateMenutypeDto,
  ): Promise<Menutype> {
    return this.menutypesService.create(createMenutypeDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Menutype'))
  public async findAll(): Promise<Menutype[]> {
    return this.menutypesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Menutype'))
  public async findOne(@Param('id') id: string): Promise<Menutype | null> {
    return this.menutypesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Menutype'))
  public async update(
    @Param('id') id: string,
    @Body() updateMenutypeDto: UpdateMenutypeDto,
  ): Promise<Menutype> {
    return this.menutypesService.update(+id, updateMenutypeDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Menutype'))
  public async remove(@Param('id') id: string): Promise<Menutype> {
    return this.menutypesService.remove(+id);
  }
}
