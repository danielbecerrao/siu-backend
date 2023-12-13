import {
  BadRequestException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { FilterOperator, FilterSuffix, paginate } from 'nestjs-paginate';
import type { Paginated, PaginateQuery } from 'nestjs-paginate';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { News } from './entities/news.entity';
import type { CreateNewsDto } from './dto/create-news.dto';
import type { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  public constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,
    private readonly dataSource: DataSource,
  ) {}
  public async create(createNewsDto: CreateNewsDto): Promise<News> {
    try {
      const news: News = new News();
      news.newsCategoryId = createNewsDto.newsCategoryId;
      news.title = createNewsDto.title;
      news.description = createNewsDto.description;
      // console.log(createNewsDto);
      let parent: News | null = null;
      if (createNewsDto.parent) {
        parent = await this.findOne(createNewsDto.parent);
      }
      news.parent = parent;
      return this.newsRepository.save(news);
    } catch (error) {
      throw new BadRequestException('Error al crear la Noticia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(query: PaginateQuery): Promise<Paginated<News>> {
    return paginate(query, this.newsRepository, {
      sortableColumns: [
        'id',
        'newsCategory.name',
        'title',
        'description',
        'createdAt',
      ],
      nullSort: 'last',
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: [
        'newsCategory.name',
        'title',
        'description',
        'createdAt',
      ],
      relations: ['newsCategory'],
      select: ['id', 'newsCategory.name', 'title', 'description', 'createdAt'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT],
        age: true,
      },
    });
  }

  public async findOne(id: number): Promise<News | null> {
    return this.newsRepository.findOneBy({ id });
  }

  public async findByCategory(newsCategoryId: number): Promise<News[] | null> {
    const newsByCategory: News[] = await this.newsRepository.find({
      where: { newsCategoryId: newsCategoryId },
    });

    if (newsByCategory.length > 0) {
      return newsByCategory;
    }

    return null;
  }

  public async findChildren(id: number): Promise<News[] | null> {
    const parent: News | null = await this.findOne(id);

    if (parent)
      return this.dataSource.manager
        .getTreeRepository(News)
        .findDescendants(parent);
    return null;
  }

  public async update(id: number, updateNewsDto: UpdateNewsDto): Promise<News> {
    const news: News | null = await this.findOne(id);
    if (!news)
      throw new NotFoundException('Error al actualizar la Noticia', {
        cause: new Error(),
        description: 'Noticia no encontrado por id',
      });
    try {
      let parent: News | null = null;
      if (updateNewsDto.parent) {
        parent = await this.findOne(updateNewsDto.parent);
      }
      news.parent = parent;
      return this.dataSource.manager.save(news);
    } catch (error) {
      throw new BadRequestException('Error al actualizar la Noticia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<News> {
    const news: News | null = await this.findOne(id);
    if (!news)
      throw new NotFoundException('Error al eliminar la Noticia', {
        cause: new Error(),
        description: 'Noticia no encontrado por id',
      });
    try {
      return await this.newsRepository.softRemove(news);
    } catch (error) {
      throw new BadRequestException('Error al eliminar la Noticia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
