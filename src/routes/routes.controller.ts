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
import { ClientsService } from 'src/clients/clients.service';
import { UsersService } from 'src/users/users.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PoliciesGuard } from 'src/casl/policies.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CheckPolicies } from 'src/common/decorators/checkPolicies.decorator';
import type { AppAbility } from 'src/casl/casl-ability.factory';
import type { Route } from './entities/route.entity';
import { User } from 'src/users/entities/user.entity';
import type {
  RouteInterface,
  RouteDetailInterface,
} from './interfaces/route.interface';
import { PayService } from 'src/auth/pay.service';
import { GetUser } from 'src/common/decorators/user.decorator';
import { RoutesData } from './data/routes.data';

@Controller('routes')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Rutas')
@ApiBearerAuth()
export class RoutesController {
  public constructor(
    private readonly routesService: RoutesService,
    private readonly payService: PayService,
    private readonly clientsService: ClientsService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Route'))
  public async create(@Body() createRouteDto: CreateRouteDto): Promise<Route> {
    return this.routesService.create(createRouteDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Route'))
  public async findAll(): Promise<RouteInterface[]> {
    const routes: RouteInterface[] = RoutesData;
    try {
      return routes;
    } catch (error) {
      throw new Error(`Error when trying to obtain routes data: ${error}`);
    }
  }

  @Get('client')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Route'))
  public async findRoutesByClient(
    @GetUser() user: User,
  ): Promise<RouteInterface[]> {
    console.log(user.id);
    const userId = user.id;
    const data: RouteInterface[] = [];

    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.data.ACCESS_TOCKEN;
      const routes: RouteInterface[] =
        await this.payService.getAllRoutes(token);
      const user: User | null = await this.usersService.findOne(userId);

      if (user) {
        const client = await this.clientsService.findOne(user.clientId);
        if (client) {
          routes.forEach((route) => {
            if (route.CLIENT_NAME.toLowerCase() === client.name.toLowerCase()) {
              data.push(route);
            }
          });
        }
      }

      return data;
    } catch (error) {
      throw new Error(`Error when trying to obtain routes data: ${error}`);
    }
  }

  @Get('detail')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Route'))
  public async findOneRouteDetail(
    @Param('id') id: string,
  ): Promise<RouteDetailInterface> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.data.ACCESS_TOCKEN;
      const routeDetail: RouteDetailInterface =
        await this.payService.getOneRouteDetail(+id, token);

      return routeDetail;
    } catch (error) {
      throw new Error(`Error when trying to obtain routes data: ${error}`);
    }
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Route'))
  public async findOne(@Param('id') id: string): Promise<RouteInterface> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.data.ACCESS_TOCKEN;
      const route: RouteInterface = await this.payService.getOneRoute(
        +id,
        token,
      );

      return route;
    } catch (error) {
      throw new Error(`Error when trying to obtain routes data: ${error}`);
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
