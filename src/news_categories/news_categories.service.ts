import {
  BadRequestException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { NewsCategory } from './entities/news_category.entity';
import type { CreateNewsCategoryDto } from './dto/create-news_category.dto';
import type { UpdateNewsCategoryDto } from './dto/update-news_category.dto';

@Injectable()
export class NewsCategoriesService {
  public constructor(
    @InjectRepository(NewsCategory)
    public readonly newsCategoryRepository: Repository<NewsCategory>,
    private readonly dataSource: DataSource,
  ) {}

  public async create(
    createNewsCategoryDto: CreateNewsCategoryDto,
  ): Promise<NewsCategory> {
    try {
      const newsCategory: NewsCategory = this.newsCategoryRepository.create(
        createNewsCategoryDto,
      );
      return await this.newsCategoryRepository.save(newsCategory);
    } catch (error) {
      throw new BadRequestException(
        'Error al crear la categoria de la noticia',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}`,
        },
      );
    }
  }

  public async findAll(): Promise<NewsCategory[]> {
    return this.newsCategoryRepository.find();
  }

  public async findOne(id: number): Promise<NewsCategory | null> {
    return this.newsCategoryRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateNewsCategoryDto: UpdateNewsCategoryDto,
  ): Promise<NewsCategory> {
    const newsCategory: NewsCategory | null = await this.findOne(id);
    if (!newsCategory)
      throw new NotFoundException(
        'Error al actualizar la categoria de la noticia',
        {
          cause: new Error(),
          description: 'Dirección no encontrada por id',
        },
      );
    try {
      return this.dataSource.manager.save(
        Object.assign(newsCategory, updateNewsCategoryDto),
      );
    } catch (error) {
      throw new BadRequestException(
        'Error al actualizar la categoria de la noticia',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}}`,
        },
      );
    }
  }

  public async remove(id: number): Promise<NewsCategory> {
    const newsCategory: NewsCategory | null = await this.findOne(id);
    if (!newsCategory)
      throw new NotFoundException(
        'Error al eliminar la categoria de la noticia',
        {
          cause: new Error(),
          description: 'Dirección no encontrada por id',
        },
      );
    try {
      return await this.newsCategoryRepository.softRemove(newsCategory);
    } catch (error) {
      throw new BadRequestException(
        'Error al eliminar la categoria de la noticia',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}}`,
        },
      );
    }
  }
}
