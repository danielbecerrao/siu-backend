import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateCountryDto } from './dto/create-country.dto';
import type { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
  public constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}
  public async create(createCountryDto: CreateCountryDto): Promise<Country> {
    try {
      const country: Country = this.countryRepository.create(createCountryDto);
      return await this.countryRepository.save(country);
    } catch (error) {
      throw new BadRequestException('Error al crear Pais', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async findAll(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  public async findOne(id: number): Promise<Country | null> {
    return this.countryRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateCountryDto: UpdateCountryDto,
  ): Promise<Country> {
    const country: Country | null = await this.findOne(id);
    if (!country)
      throw new NotFoundException('Error al actualizar Pais', {
        cause: new Error(),
        description: 'Pai no encontrado por id',
      });
    try {
      return await this.countryRepository.save(
        Object.assign(country, updateCountryDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Pais', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<Country> {
    const country: Country | null = await this.findOne(id);
    if (!country)
      throw new NotFoundException('Error al eliminar Pais', {
        cause: new Error(),
        description: 'Pais no encontrado por id',
      });
    try {
      return await this.countryRepository.softRemove(country);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Pais', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }
}
