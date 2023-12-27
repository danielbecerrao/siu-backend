import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PoliciesGuard } from 'src/casl/policies.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CheckPolicies } from 'src/common/decorators/checkPolicies.decorator';
import type { AppAbility } from 'src/casl/casl-ability.factory';
import { GeozonesService } from './geozones.service';
import { PayService } from 'src/auth/pay.service';
import { CreateGeozoneDto } from './dto/create-geozone.dto';
import { UpdateGeozoneDto } from './dto/update-geozone.dto';
import type { Geozone } from './entities/geozone.entity';
import type { GeozoneInterface } from './interfaces/geozone.interface';

@Controller('geozones')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Geozonas')
@ApiBearerAuth()
export class GeozonesController {
  public constructor(
    private readonly geozonesService: GeozonesService,
    private readonly payService: PayService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Geozone'))
  public async create(
    @Body() createGeozoneDto: CreateGeozoneDto,
  ): Promise<Geozone> {
    return this.geozonesService.create(createGeozoneDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Geozone'))
  public async findAll(): Promise<GeozoneInterface> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.data.ACCESS_TOCKEN;
      const routes: GeozoneInterface =
        await this.payService.getAllGeozones(token);

      return routes;
    } catch (error) {
      throw new Error(`Error when trying to obtain fares data: ${error}`);
    }
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Geozone'))
  public async findOne(@Param('id') id: string): Promise<GeozoneInterface> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.data.ACCESS_TOCKEN;
      const route: GeozoneInterface = await this.payService.getOneGeozone(
        +id,
        token,
      );

      return route;
    } catch (error) {
      throw new Error(`Error when trying to obtain fares data: ${error}`);
    }
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Geozone'))
  public async update(
    @Param('id') id: string,
    @Body() updateGeozoneDto: UpdateGeozoneDto,
  ): Promise<Geozone> {
    return this.geozonesService.update(+id, updateGeozoneDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Geozone'))
  public async remove(@Param('id') id: string): Promise<Geozone> {
    return this.geozonesService.remove(+id);
  }
}
