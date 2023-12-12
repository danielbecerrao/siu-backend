import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressType } from './entities/types.entity';

@Injectable()
export class AddressTypeService {
  public constructor(
    @InjectRepository(AddressType)
    private readonly addressTypeRepository: Repository<AddressType>,
  ) {}

  public async findAll(): Promise<AddressType[]> {
    return this.addressTypeRepository.find();
  }

  public async findOne(id: number): Promise<AddressType | null> {
    return this.addressTypeRepository.findOneBy({ id });
  }

  public async remove(id: number): Promise<AddressType> {
    const addressType: AddressType | null = await this.findOne(id);
    if (!addressType)
      throw new NotFoundException('Error al eliminar Dirección', {
        cause: new Error(),
        description: 'Dirección no encontrada por id',
      });
    try {
      return await this.addressTypeRepository.softRemove(addressType);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Dirección', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
