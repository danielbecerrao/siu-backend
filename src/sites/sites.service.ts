import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateSiteDto } from './dto/create-site.dto';
import type { UpdateSiteDto } from './dto/update-site.dto';
import { Site } from './entities/site.entity';

@Injectable()
export class SitesService {
  public constructor(
    @InjectRepository(Site)
    private readonly siteRepository: Repository<Site>,
  ) {}
  public async create(createSiteDto: CreateSiteDto): Promise<Site> {
    try {
      const site: Site = this.siteRepository.create(createSiteDto);
      return await this.siteRepository.save(site);
    } catch (error) {
      throw new BadRequestException('Error al crear Sitio', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<Site[]> {
    return this.siteRepository.find();
  }

  public async findOne(id: number): Promise<Site | null> {
    return this.siteRepository.findOneBy({ id });
  }

  public async update(id: number, updateSiteDto: UpdateSiteDto): Promise<Site> {
    const site: Site | null = await this.findOne(id);
    if (!site)
      throw new NotFoundException('Error al actualizar Sitio', {
        cause: new Error(),
        description: 'Sitio no encontrado por id',
      });
    try {
      return await this.siteRepository.save(Object.assign(site, updateSiteDto));
    } catch (error) {
      throw new BadRequestException('Error al actualizar Sitio', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Site> {
    const site: Site | null = await this.findOne(id);
    if (!site)
      throw new NotFoundException('Error al eliminar Sitio', {
        cause: new Error(),
        description: 'Sitio no encontrado por id',
      });
    try {
      return await this.siteRepository.softRemove(site);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Sitio', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
