import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateActionDto } from './dto/create-action.dto';
import type { UpdateActionDto } from './dto/update-action.dto';
import { Action } from './entities/action.entity';

@Injectable()
export class ActionsService {
  public constructor(
    @InjectRepository(Action)
    private readonly actionRepository: Repository<Action>,
  ) {}
  public async create(createActionDto: CreateActionDto): Promise<Action> {
    try {
      const action: Action = this.actionRepository.create(createActionDto);
      return await this.actionRepository.save(action);
    } catch (error) {
      throw new BadRequestException('Error al crear Accion', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async findAll(): Promise<Action[]> {
    return this.actionRepository.find();
  }

  public async findOne(id: number): Promise<Action | null> {
    return this.actionRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateActionDto: UpdateActionDto,
  ): Promise<Action> {
    const action: Action | null = await this.findOne(id);
    if (!action)
      throw new NotFoundException('Error al actualizar Accion', {
        cause: new Error(),
        description: 'Accion no encontrado por id',
      });
    try {
      return await this.actionRepository.save(
        Object.assign(action, updateActionDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Accion', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }

  public async remove(id: number): Promise<Action> {
    const action: Action | null = await this.findOne(id);
    if (!action)
      throw new NotFoundException('Error al eliminar Accion', {
        cause: new Error(),
        description: 'Accion no encontrado por id',
      });
    try {
      return await this.actionRepository.softRemove(action);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Accion', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    }
  }
}
