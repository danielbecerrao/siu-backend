import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateLabelDto } from './dto/create-label.dto';
import type { UpdateLabelDto } from './dto/update-label.dto';
import { Label } from './entities/label.entity';

@Injectable()
export class LabelsService {
  public constructor(
    @InjectRepository(Label)
    private readonly labelRepository: Repository<Label>,
  ) {}
  /**
   * The function creates a new label using the provided data and saves it to the label repository,
   * returning the created label.
   * @param {CreateLabelDto} createLabelDto - The parameter `createLabelDto` is of type
   * `CreateLabelDto`. It is an object that contains the data needed to create a label.
   * @returns The create method is returning a Promise that resolves to a Label object.
   */
  public async create(createLabelDto: CreateLabelDto): Promise<Label> {
    try {
      const label: Label = this.labelRepository.create(createLabelDto);
      return await this.labelRepository.save(label);
    } catch (error) {
      throw new BadRequestException('Error al crear Label', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<Label[]> {
    return this.labelRepository.find();
  }

  public async findOne(id: number): Promise<Label | null> {
    return this.labelRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateLabelDto: UpdateLabelDto,
  ): Promise<Label> {
    const label: Label | null = await this.findOne(id);
    if (!label)
      throw new NotFoundException('Error al actualizar Label', {
        cause: new Error(),
        description: 'Label no encontrado por id',
      });
    try {
      return await this.labelRepository.save(
        Object.assign(label, updateLabelDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Label', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Label> {
    const label: Label | null = await this.findOne(id);
    if (!label)
      throw new NotFoundException('Error al eliminar Label', {
        cause: new Error(),
        description: 'Label no encontrado por id',
      });
    try {
      return await this.labelRepository.softRemove(label);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Label', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
