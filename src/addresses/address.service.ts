import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import type { CreateAddressDto } from './dto/create-address.dto';
import type { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  public constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    private readonly dataSource: DataSource,
  ) {}
  public async create(createAddressDto: CreateAddressDto): Promise<Address> {
    try {
      const address: Address = this.addressRepository.create(createAddressDto);
      return this.dataSource.manager.save(address);
    } catch (error) {
      throw new BadRequestException('Error al crear Dirección', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<Address[]> {
    return this.addressRepository.find({ relations: ['addressType'] });
  }

  public async findOne(id: number): Promise<Address | null> {
    return this.addressRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    const address: Address | null = await this.findOne(id);
    if (!address)
      throw new NotFoundException('Error al actualizar Dirección', {
        cause: new Error(),
        description: 'Dirección no encontrada por id',
      });
    try {
      console.log(address, updateAddressDto);
      return this.addressRepository.save(
        Object.assign(address, updateAddressDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Dirección', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Address> {
    const address: Address | null = await this.findOne(id);
    if (!address)
      throw new NotFoundException('Error al eliminar Dirección', {
        cause: new Error(),
        description: 'Dirección no encontrada por id',
      });
    try {
      return await this.addressRepository.softRemove(address);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Dirección', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}