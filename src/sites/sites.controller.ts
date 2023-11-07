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
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import type { Site } from './entities/site.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('sites')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Sitios')
@ApiBearerAuth()
export class SitesController {
  public constructor(private readonly sitesService: SitesService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Site'))
  public async create(@Body() createSiteDto: CreateSiteDto): Promise<Site> {
    return this.sitesService.create(createSiteDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Site'))
  public async findAll(): Promise<Site[]> {
    return this.sitesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Site'))
  public async findOne(@Param('id') id: string): Promise<Site | null> {
    return this.sitesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Site'))
  public async update(
    @Param('id') id: string,
    @Body() updateSiteDto: UpdateSiteDto,
  ): Promise<Site> {
    return this.sitesService.update(+id, updateSiteDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Site'))
  public async remove(@Param('id') id: string): Promise<Site> {
    return this.sitesService.remove(+id);
  }
}
