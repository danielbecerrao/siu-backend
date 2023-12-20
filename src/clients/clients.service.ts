import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import type { CreateClientDto } from './dto/create-client.dto';
import type { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  public constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    private readonly dataSource: DataSource,
  ) {}
  public async create(createClientDto: CreateClientDto): Promise<Client> {
    try {
      const client: Client = new Client();
      client.name = createClientDto.name;
      let parent: Client | null = null;
      if (createClientDto.parent) {
        parent = await this.findOne(createClientDto.parent);
      }
      client.parent = parent;
      return this.dataSource.manager.save(client);
    } catch (error) {
      throw new BadRequestException('Error al crear Cliente', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<Client[]> {
    return this.dataSource.manager.getTreeRepository(Client).findTrees({
      relations: ['city'],
    });
  }

  public async findOne(id: number): Promise<Client | null> {
    return this.clientRepository.findOneBy({ id });
  }

  public async findOneParent(id: number): Promise<Client | null> {
    const parent: Client | null = await this.findOne(id);
    if (parent)
      return this.dataSource.manager
        .getTreeRepository(Client)
        .findDescendantsTree(parent, {
          relations: ['city'],
        });
    return null;
  }

  public async update(
    id: number,
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    const client: Client | null = await this.findOne(id);
    if (!client)
      throw new NotFoundException('Error al actualizar Cliente', {
        cause: new Error(),
        description: 'Cliente no encontrado por id',
      });
    try {
      let parent: Client | null = null;
      if (updateClientDto.parent) {
        parent = await this.findOne(updateClientDto.parent);
      }
      client.parent = parent;
      return this.dataSource.manager.save(client);
    } catch (error) {
      throw new BadRequestException('Error al actualizar Cliente', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<Client> {
    const client: Client | null = await this.findOne(id);
    if (!client)
      throw new NotFoundException('Error al eliminar Cliente', {
        cause: new Error(),
        description: 'Cliente no encontrado por id',
      });
    try {
      return await this.clientRepository.softRemove(client);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Cliente', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
