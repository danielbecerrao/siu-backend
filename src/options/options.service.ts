import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateOptionDto } from './dto/create-option.dto';
import type { UpdateOptionDto } from './dto/update-option.dto';
import { Option } from './entities/option.entity';

@Injectable()
export class OptionsService {
  public constructor(
    @InjectRepository(Option)
    private readonly optionRepository: Repository<Option>,
  ) {}
  public async create(createOptionDto: CreateOptionDto): Promise<Option> {
    try {
      const option: Option = this.optionRepository.create(createOptionDto);
      return await this.optionRepository.save(option);
    } catch (error) {
      throw new BadRequestException('Error al crear Option', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<Option[]> {
    return this.optionRepository.find();
  }

  public async findOne(id: number): Promise<Option | null> {
    return this.optionRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateOptionDto: UpdateOptionDto,
  ): Promise<Option> {
    const option: Option | null = await this.findOne(id);
    if (!option)
      throw new NotFoundException('Error al actualizar Option', {
        cause: new Error(),
        description: 'Option no encontrado por id',
      });
    try {
      return await this.optionRepository.save(
        Object.assign(option, updateOptionDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Option', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Option> {
    const option: Option | null = await this.findOne(id);
    if (!option)
      throw new NotFoundException('Error al eliminar Option', {
        cause: new Error(),
        description: 'Option no encontrado por id',
      });
    try {
      return await this.optionRepository.softRemove(option);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Option', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
