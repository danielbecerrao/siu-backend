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
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PoliciesGuard } from 'src/casl/policies.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CheckPolicies } from 'src/common/decorators/checkPolicies.decorator';
import type { AppAbility } from 'src/casl/casl-ability.factory';
import type { Route } from './entities/route.entity';
import type {
  RouteInterface,
  RouteDetailInterface,
} from './interfaces/route.interface';
import { PayService } from 'src/auth/pay.service';

@Controller('routes')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Rutas')
@ApiBearerAuth()
export class RoutesController {
  public constructor(
    private readonly routesService: RoutesService,
    private readonly payService: PayService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Route'))
  public async create(@Body() createRouteDto: CreateRouteDto): Promise<Route> {
    return this.routesService.create(createRouteDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Route'))
  public async findAll(): Promise<RouteInterface> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.accessToken;
      const routes: RouteInterface = await this.payService.getAllRoutes(token);

      return routes;
    } catch (error) {
      throw new Error(`Error when trying to obtain fares data: ${error}`);
    }
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Route'))
  public async findOne(@Param('id') id: string): Promise<RouteInterface> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.accessToken;
      const route: RouteInterface = await this.payService.getOneRoute(
        +id,
        token,
      );

      return route;
    } catch (error) {
      throw new Error(`Error when trying to obtain fares data: ${error}`);
    }
  }

  @Get('detail/:id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Route'))
  public async findOneRouteDetail(
    @Param('id') id: string,
  ): Promise<RouteDetailInterface> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.accessToken;
      const routeDetail: RouteDetailInterface =
        await this.payService.getOneRouteDetail(+id, token);

      return routeDetail;
    } catch (error) {
      throw new Error(`Error when trying to obtain fares data: ${error}`);
    }
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Route'))
  public async update(
    @Param('id') id: string,
    @Body() updateRouteDto: UpdateRouteDto,
  ): Promise<Route> {
    return this.routesService.update(id, updateRouteDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Route'))
  public async remove(@Param('id') id: string): Promise<Route> {
    return this.routesService.remove(+id);
  }
}
