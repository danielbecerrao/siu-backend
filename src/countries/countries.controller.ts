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
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import type { Country } from './entities/country.entity';
import { PoliciesGuard } from '../casl/policies.guard';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';

@Controller('countries')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Paises')
@ApiBearerAuth()
export class CountriesController {
  public constructor(private readonly countriesService: CountriesService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Country'))
  public async create(
    @Body() createCountryDto: CreateCountryDto,
  ): Promise<Country> {
    return this.countriesService.create(createCountryDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Country'))
  public async findAll(): Promise<Country[]> {
    return this.countriesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Country'))
  public async findOne(@Param('id') id: string): Promise<Country | null> {
    return this.countriesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Country'))
  public async update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ): Promise<Country> {
    return this.countriesService.update(+id, updateCountryDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Country'))
  public async remove(@Param('id') id: string): Promise<Country> {
    return this.countriesService.remove(+id);
  }
}
