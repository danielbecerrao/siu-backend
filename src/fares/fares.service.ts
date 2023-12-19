import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FilterOperator, FilterSuffix, paginate } from 'nestjs-paginate';
import type { Paginated, PaginateQuery } from 'nestjs-paginate';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Fare } from './entities/fare.entity';
import type { CreateFareDto } from './dto/create-fare.dto';
import type { UpdateFareDto } from './dto/update-fare.dto';

@Injectable()
export class FaresService {
  public constructor(
    @InjectRepository(Fare)
    private readonly fareRepository: Repository<Fare>,
    private readonly dataSource: DataSource,
  ) {}
  public async create(createFareDto: CreateFareDto): Promise<Fare> {
    try {
      const fare: Fare = this.fareRepository.create(createFareDto);
      return this.fareRepository.save(fare);
    } catch (error) {
      throw new BadRequestException('Error al crear la Tarifa', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(query: PaginateQuery): Promise<Paginated<Fare>> {
    return paginate(query, this.fareRepository, {
      sortableColumns: [
        'id',
        'client.name',
        'route.name',
        'fareType.name',
        'fareCategory.name',
        'description',
        'createdAt',
      ],
      nullSort: 'last',
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: [
        'client.name',
        'route.name',
        'fareType.name',
        'fareCategory.name',
        'description',
        'createdAt',
      ],
      relations: ['client', 'route', 'fareType', 'fareCategory'],
      select: [
        'id',
        'client.name',
        'route.name',
        'fareType.name',
        'fareCategory.name',
        'description',
        'createdAt',
      ],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT],
        age: true,
      },
    });
  }

  public async findOne(id: number): Promise<Fare | null> {
    return this.fareRepository.findOneBy({ id });
  }

  public async update(id: number, updateFareDto: UpdateFareDto): Promise<Fare> {
    const fare: Fare | null = await this.findOne(id);
    if (!fare)
      throw new NotFoundException('Error al actualizar la Tarifa', {
        cause: new Error(),
        description: 'Tarifa no encontrada por id',
      });
    try {
      return this.fareRepository.save(Object.assign(fare, updateFareDto));
    } catch (error) {
      throw new BadRequestException('Error al actualizar la Tarifa', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Fare> {
    const fare: Fare | null = await this.findOne(id);
    if (!fare)
      throw new NotFoundException('Error al eliminar la Tarifa', {
        cause: new Error(),
        description: 'Tarifa no encontrada por id',
      });
    try {
      return await this.fareRepository.softRemove(fare);
    } catch (error) {
      throw new BadRequestException('Error al eliminar la Tarifa', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
