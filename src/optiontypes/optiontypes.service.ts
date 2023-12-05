import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateOptiontypeDto } from './dto/create-optiontype.dto';
import type { UpdateOptiontypeDto } from './dto/update-optiontype.dto';
import { OptionType } from './entities/optiontype.entity';

@Injectable()
export class OptiontypesService {
  public constructor(
    @InjectRepository(OptionType)
    private readonly optiontypeRepository: Repository<OptionType>,
  ) {}
  public async create(
    createOptiontypeDto: CreateOptiontypeDto,
  ): Promise<OptionType> {
    try {
      const optiontype: OptionType =
        this.optiontypeRepository.create(createOptiontypeDto);
      return await this.optiontypeRepository.save(optiontype);
    } catch (error) {
      throw new BadRequestException('Error al crear Optiontype', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<OptionType[]> {
    return this.optiontypeRepository.find();
  }

  public async findOne(id: number): Promise<OptionType | null> {
    return this.optiontypeRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateOptiontypeDto: UpdateOptiontypeDto,
  ): Promise<OptionType> {
    const optiontype: OptionType | null = await this.findOne(id);
    if (!optiontype)
      throw new NotFoundException('Error al actualizar Optiontype', {
        cause: new Error(),
        description: 'Optiontype no encontrado por id',
      });
    try {
      return await this.optiontypeRepository.save(
        Object.assign(optiontype, updateOptiontypeDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Optiontype', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<OptionType> {
    const optiontype: OptionType | null = await this.findOne(id);
    if (!optiontype)
      throw new NotFoundException('Error al eliminar Optiontype', {
        cause: new Error(),
        description: 'Optiontype no encontrado por id',
      });
    try {
      return await this.optiontypeRepository.softRemove(optiontype);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Optiontype', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
