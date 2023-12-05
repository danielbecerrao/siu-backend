import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import type { CreateMenuDto } from './dto/create-menu.dto';
import type { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenusService {
  public constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
    private readonly dataSource: DataSource,
  ) {}
  public async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    try {
      const menu: Menu = this.menuRepository.create(createMenuDto);
      return await this.menuRepository.save(menu);
    } catch (error) {
      throw new BadRequestException('Error al crear Menu', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<Menu[]> {
    return this.dataSource.manager.getTreeRepository(Menu).findTrees();
  }

  public async findOne(id: number): Promise<Menu | null> {
    return this.menuRepository.findOneBy({ id });
  }

  public async update(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    const menu: Menu | null = await this.findOne(id);
    if (!menu)
      throw new NotFoundException('Error al actualizar Menu', {
        cause: new Error(),
        description: 'Menu no encontrado por id',
      });
    try {
      return await this.menuRepository.save(Object.assign(menu, updateMenuDto));
    } catch (error) {
      throw new BadRequestException('Error al actualizar Menu', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Menu> {
    const menu: Menu | null = await this.findOne(id);
    if (!menu)
      throw new NotFoundException('Error al eliminar Menu', {
        cause: new Error(),
        description: 'Menu no encontrado por id',
      });
    try {
      return await this.menuRepository.softRemove(menu);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Menu', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
