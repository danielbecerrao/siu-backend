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
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import type { Menu } from './entities/menu.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('fwr/menus')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Menús')
@ApiBearerAuth()
export class MenusController {
  public constructor(private readonly menusService: MenusService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Menu'))
  public async create(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menusService.create(createMenuDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Menu'))
  public async findAll(): Promise<Menu[]> {
    return this.menusService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Menu'))
  public async findOne(@Param('id') id: string): Promise<Menu | null> {
    return this.menusService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Menu'))
  public async update(
    @Param('id') id: string,
    @Body() updateMenuDto: UpdateMenuDto,
  ): Promise<Menu> {
    return this.menusService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Menu'))
  public async remove(@Param('id') id: string): Promise<Menu> {
    return this.menusService.remove(+id);
  }
}
