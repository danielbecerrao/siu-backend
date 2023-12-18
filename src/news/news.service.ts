import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import type { CreateNewsDto } from './dto/create-news.dto';
import type { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  public constructor(
    @InjectRepository(News)
    private readonly newRepository: Repository<News>,
    private readonly dataSource: DataSource,
  ) {}

  public async create(createNewsDto: CreateNewsDto): Promise<News> {
    try {
      const news: News = new News();
      news.title = createNewsDto.title;
      news.description = createNewsDto.description;
      news.publicationDate = createNewsDto.publicationDate;
      news.newsCategoryId = createNewsDto.newsCategoryId;
      let parent: News | null = null;
      if (createNewsDto.parent) {
        parent = await this.findOne(createNewsDto.parent);
      }
      news.parent = parent;
      return this.dataSource.manager.save(news);
    } catch (error) {
      throw new BadRequestException('Error al crear Noticia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<News[]> {
    return this.newRepository.find();
  }

  private async findOne(id: number): Promise<News | null> {
    return this.newRepository.findOneBy({ id });
  }

  public async findNewsByCategory(id: number): Promise<News[] | null> {
    return this.newRepository.find({ where: { newsCategoryId: id } });
  }

  public async findOneParent(id: number): Promise<News | null> {
    const parent: News | null = await this.findOne(id);
    if (parent)
      return this.dataSource.manager
        .getTreeRepository(News)
        .findDescendantsTree(parent, {
          relations: ['newsCategory'],
          depth: 1,
        });
    return null;
  }

  public async update(id: number, updateNewsDto: UpdateNewsDto): Promise<News> {
    const news: News | null = await this.findOne(id);
    if (!news)
      throw new NotFoundException('Error al actualizar Noticia', {
        cause: new Error(),
        description: 'Noticia no encontrada por id',
      });
    try {
      let parent: News | null = null;
      if (updateNewsDto.parent) {
        parent = await this.findOne(updateNewsDto.parent);
      }
      news.parent = parent;
      return this.dataSource.manager.save(news);
    } catch (error) {
      throw new BadRequestException('Error al actualizar Noticia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<News> {
    const news: News | null = await this.findOne(id);
    if (!news)
      throw new NotFoundException('Error al eliminar Noticia', {
        cause: new Error(),
        description: 'Noticia no encontrado por id',
      });
    try {
      return await this.newRepository.softRemove(news);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Noticia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
