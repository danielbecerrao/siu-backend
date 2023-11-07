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
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import type { City } from './entities/city.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('cities')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Ciudades')
@ApiBearerAuth()
export class CitiesController {
  public constructor(private readonly citiesService: CitiesService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'City'))
  public async create(@Body() createCityDto: CreateCityDto): Promise<City> {
    return this.citiesService.create(createCityDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'City'))
  public async findAll(): Promise<City[]> {
    return this.citiesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'City'))
  public async findOne(@Param('id') id: string): Promise<City | null> {
    return this.citiesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'City'))
  public async update(
    @Param('id') id: string,
    @Body() updateCityDto: UpdateCityDto,
  ): Promise<City> {
    return this.citiesService.update(+id, updateCityDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'City'))
  public async remove(@Param('id') id: string): Promise<City> {
    return this.citiesService.remove(+id);
  }
}
