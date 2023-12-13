import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsImageType } from './entities/types.entity';

@Injectable()
export class NewsImageTypeService {
  public constructor(
    @InjectRepository(NewsImageType)
    private readonly newsImageTypeRepository: Repository<NewsImageType>,
  ) {}

  public async findAll(): Promise<NewsImageType[]> {
    return this.newsImageTypeRepository.find();
  }

  public async findOne(id: number): Promise<NewsImageType | null> {
    return this.newsImageTypeRepository.findOneBy({ id });
  }

  public async remove(id: number): Promise<NewsImageType> {
    const addressType: NewsImageType | null = await this.findOne(id);
    if (!addressType)
      throw new NotFoundException('Error al eliminar Dirección', {
        cause: new Error(),
        description: 'Dirección no encontrada por id',
      });
    try {
      return await this.newsImageTypeRepository.softRemove(addressType);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Dirección', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
