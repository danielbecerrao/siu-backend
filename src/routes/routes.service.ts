import {
  BadRequestException,
  Body,
  Injectable,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { Route } from './entities/route.entity';
import type { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoutesService {
  public constructor(
    @InjectRepository(Route)
    private readonly routeRepository: Repository<Route>,
    private readonly dataSource: DataSource,
  ) {}

  public async create(createRouteDto: CreateRouteDto): Promise<Route> {
    return this.routeRepository.create(createRouteDto);
  }

  public async findAll(): Promise<Route[]> {
    return this.routeRepository.find();
  }

  public async findOne(id: number): Promise<Route | null> {
    return this.routeRepository.findOneBy({ id });
  }

  public async update(
    @Param('id') id: string,
    @Body() updateRouteDto: UpdateRouteDto,
  ): Promise<Route> {
    const route: Route | null = await this.findOne(+id);
    if (!route)
      throw new NotFoundException('Error al actualizar la Ruta', {
        cause: new Error(),
        description: 'Ruta no encontrada por id',
      });
    try {
      return this.routeRepository.save(Object.assign(route, updateRouteDto));
    } catch (error) {
      throw new BadRequestException('Error al actualizar la Ruta', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Route> {
    const route: Route | null = await this.findOne(+id);
    if (!route)
      throw new NotFoundException('Error al eliminar la Ruta', {
        cause: new Error(),
        description: 'Ruta no encontrada por id',
      });
    try {
      return await this.routeRepository.softRemove(route);
    } catch (error) {
      throw new BadRequestException('Error al eliminar la Ruta', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
