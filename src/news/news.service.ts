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
import { FilesService } from 'src/files/files.service';
import type { NewsImage } from 'src/newsimages/entities/newsImage.entity';
import type { NewsFile } from 'src/newsfiles/entities/newsFile.entity';

@Injectable()
export class NewsService {
  public constructor(
    @InjectRepository(News)
    private readonly newRepository: Repository<News>,
    private readonly dataSource: DataSource,
    private readonly filesService: FilesService,
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

  public async findSignedUrl(
    elements: NewsImage[] | NewsFile[],
    folder: string,
  ): Promise<void> {
    for await (const element of elements) {
      element['url'] = await this.filesService.getPresignedUrl(
        folder,
        element.name,
        element.id,
      );
      if (folder === 'img_news') {
        element['url2x'] = await this.filesService.getPresignedUrl(
          folder,
          `2x${element.name}`,
          element.id,
        );
      }
    }
  }

  public async findAll(): Promise<News[]> {
    const news: News[] = await this.newRepository.find({
      relations: ['newsCategory', 'newsImages', 'newsFiles', 'children'],
    });
    for await (const inews of news) {
      await this.findSignedUrl(inews.newsImages, 'img_news');
      await this.findSignedUrl(inews.newsFiles, 'img_files');
    }
    return news;
  }

  private async findOne(id: number): Promise<News | null> {
    return this.newRepository.findOneBy({ id });
  }

  public async findNewsByCategory(id: number): Promise<News[] | null> {
    const news: News[] = await this.newRepository.find({
      relations: ['newsCategory', 'newsImages', 'newsFiles', 'children'],
      where: { newsCategoryId: id },
    });
    for await (const inews of news) {
      await this.findSignedUrl(inews.newsImages, 'img_news');
      await this.findSignedUrl(inews.newsFiles, 'img_files');
    }
    return news;
  }

  public async findOneWithChildren(id: number): Promise<News | null> {
    const parent: News | null = await this.findOne(id);
    if (parent) {
      const news: News = await this.dataSource.manager
        .getTreeRepository(News)
        .findDescendantsTree(parent, {
          relations: ['newsCategory', 'newsImages', 'newsFiles'],
          depth: 1,
        });
      await this.findSignedUrl(news.newsImages, 'img_news');
      await this.findSignedUrl(news.newsFiles, 'img_files');
      for await (const childrenNews of news.children) {
        await this.findSignedUrl(childrenNews.newsImages, 'img_news');
        await this.findSignedUrl(childrenNews.newsFiles, 'img_files');
      }
      return news;
    }
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
