import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateMenutypeDto } from './dto/create-menutype.dto';
import type { UpdateMenutypeDto } from './dto/update-menutype.dto';
import { Menutype } from './entities/menutype.entity';

@Injectable()
export class MenutypesService {
  public constructor(
    @InjectRepository(Menutype)
    private readonly menutypeRepository: Repository<Menutype>,
  ) {}
  public async create(createMenutypeDto: CreateMenutypeDto): Promise<Menutype> {
    try {
      const menutype: Menutype =
        this.menutypeRepository.create(createMenutypeDto);
      return await this.menutypeRepository.save(menutype);
    } catch (error) {
      throw new BadRequestException('Error al crear Menutype', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<Menutype[]> {
    return this.menutypeRepository.find();
  }

  public async findOne(id: number): Promise<Menutype | null> {
    return this.menutypeRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateMenutypeDto: UpdateMenutypeDto,
  ): Promise<Menutype> {
    const menutype: Menutype | null = await this.findOne(id);
    if (!menutype)
      throw new NotFoundException('Error al actualizar Menutype', {
        cause: new Error(),
        description: 'Menutype no encontrado por id',
      });
    try {
      return await this.menutypeRepository.save(
        Object.assign(menutype, updateMenutypeDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Menutype', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Menutype> {
    const menutype: Menutype | null = await this.findOne(id);
    if (!menutype)
      throw new NotFoundException('Error al eliminar Menutype', {
        cause: new Error(),
        description: 'Menutype no encontrado por id',
      });
    try {
      return await this.menutypeRepository.softRemove(menutype);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Menutype', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
