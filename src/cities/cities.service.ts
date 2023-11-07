import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateCityDto } from './dto/create-city.dto';
import type { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  public constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}
  public async create(createCityDto: CreateCityDto): Promise<City> {
    try {
      const city: City = this.cityRepository.create(createCityDto);
      return await this.cityRepository.save(city);
    } catch (error) {
      throw new BadRequestException('Error al crear Ciudad', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  public async findOne(id: number): Promise<City | null> {
    return this.cityRepository.findOneBy({ id });
  }

  public async update(id: number, updateCityDto: UpdateCityDto): Promise<City> {
    const city: City | null = await this.findOne(id);
    if (!city)
      throw new NotFoundException('Error al actualizar Ciudad', {
        cause: new Error(),
        description: 'Ciudad no encontrado por id',
      });
    try {
      return await this.cityRepository.save(Object.assign(city, updateCityDto));
    } catch (error) {
      throw new BadRequestException('Error al actualizar Ciudad', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<City> {
    const city: City | null = await this.findOne(id);
    if (!city)
      throw new NotFoundException('Error al eliminar Ciudad', {
        cause: new Error(),
        description: 'Ciudad no encontrado por id',
      });
    try {
      return await this.cityRepository.softRemove(city);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Ciudad', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }
}
