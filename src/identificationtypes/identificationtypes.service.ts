import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateIdentificationtypeDto } from './dto/create-identificationtype.dto';
import type { UpdateIdentificationtypeDto } from './dto/update-identificationtype.dto';
import { IdentificationType } from './entities/identificationtype.entity';

@Injectable()
export class IdentificationtypesService {
  public constructor(
    @InjectRepository(IdentificationType)
    private readonly identificationtypeRepository: Repository<IdentificationType>,
  ) {}
  public async create(
    createIdentificationtypeDto: CreateIdentificationtypeDto,
  ): Promise<IdentificationType> {
    try {
      const identificationtype: IdentificationType =
        this.identificationtypeRepository.create(createIdentificationtypeDto);
      return await this.identificationtypeRepository.save(identificationtype);
    } catch (error) {
      throw new BadRequestException('Error al crear IdentificationType', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<IdentificationType[]> {
    return this.identificationtypeRepository.find();
  }

  public async findOne(id: number): Promise<IdentificationType | null> {
    return this.identificationtypeRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateIdentificationtypeDto: UpdateIdentificationtypeDto,
  ): Promise<IdentificationType> {
    const identificationtype: IdentificationType | null =
      await this.findOne(id);
    if (!identificationtype)
      throw new NotFoundException('Error al actualizar IdentificationType', {
        cause: new Error(),
        description: 'IdentificationType no encontrado por id',
      });
    try {
      return await this.identificationtypeRepository.save(
        Object.assign(identificationtype, updateIdentificationtypeDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar IdentificationType', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<IdentificationType> {
    const identificationtype: IdentificationType | null =
      await this.findOne(id);
    if (!identificationtype)
      throw new NotFoundException('Error al eliminar IdentificationType', {
        cause: new Error(),
        description: 'IdentificationType no encontrado por id',
      });
    try {
      return await this.identificationtypeRepository.softRemove(
        identificationtype,
      );
    } catch (error) {
      throw new BadRequestException('Error al eliminar IdentificationType', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
