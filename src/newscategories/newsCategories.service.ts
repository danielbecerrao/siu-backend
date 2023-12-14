import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateNewsCategoryDto } from './dto/create-news-category.dto';
import type { UpdateNewsCategoryDto } from './dto/update-news-category.dto';
import { NewsCategory } from './entities/newsCategory.entity';

@Injectable()
export class NewsCategoriesService {
  public constructor(
    @InjectRepository(NewsCategory)
    private readonly newscategoryRepository: Repository<NewsCategory>,
  ) {}
  public async create(
    createNewscategoryDto: CreateNewsCategoryDto,
  ): Promise<NewsCategory> {
    try {
      const newscategory: NewsCategory = this.newscategoryRepository.create(
        createNewscategoryDto,
      );
      return await this.newscategoryRepository.save(newscategory);
    } catch (error) {
      throw new BadRequestException('Error al crear Newscategory', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<NewsCategory[]> {
    return this.newscategoryRepository.find();
  }

  public async findOne(id: number): Promise<NewsCategory | null> {
    return this.newscategoryRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateNewscategoryDto: UpdateNewsCategoryDto,
  ): Promise<NewsCategory> {
    const newscategory: NewsCategory | null = await this.findOne(id);
    if (!newscategory)
      throw new NotFoundException('Error al actualizar Newscategory', {
        cause: new Error(),
        description: 'Newscategory no encontrado por id',
      });
    try {
      return await this.newscategoryRepository.save(
        Object.assign(newscategory, updateNewscategoryDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Newscategory', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<NewsCategory> {
    const newscategory: NewsCategory | null = await this.findOne(id);
    if (!newscategory)
      throw new NotFoundException('Error al eliminar Newscategory', {
        cause: new Error(),
        description: 'Newscategory no encontrado por id',
      });
    try {
      return await this.newscategoryRepository.softRemove(newscategory);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Newscategory', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
