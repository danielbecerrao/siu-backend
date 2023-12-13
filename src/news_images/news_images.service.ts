import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { NewsImage } from './entities/news_images.entity';
import type { CreateNewsImageDto } from './dto/create-news_image.dto';
import type { UpdateNewsImageDto } from './dto/update-news_image.dto';

@Injectable()
export class NewsImagesService {
  public constructor(
    @InjectRepository(NewsImage)
    private readonly newsImageRepository: Repository<NewsImage>,
    private readonly dataSource: DataSource,
  ) {}
  public async create(
    createNewsImageDto: CreateNewsImageDto,
  ): Promise<NewsImage> {
    try {
      const newsImage: NewsImage =
        this.newsImageRepository.create(createNewsImageDto);
      return await this.newsImageRepository.save(newsImage);
    } catch (error) {
      throw new BadRequestException('Error al crear la Imágen de la noticia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<NewsImage[]> {
    return this.newsImageRepository.find();
  }

  public async findOne(id: number): Promise<NewsImage | null> {
    return this.newsImageRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    updateNewsImageDto: UpdateNewsImageDto,
  ): Promise<NewsImage> {
    const newsImage: NewsImage | null = await this.findOne(id);
    if (!newsImage)
      throw new NotFoundException(
        'Error al actualizar la Imágen de la noticia',
        {
          cause: new Error(),
          description: 'Imágen de la noticia no encontrada por id',
        },
      );
    try {
      return await this.newsImageRepository.save(
        Object.assign(newsImage, updateNewsImageDto),
      );
    } catch (error) {
      throw new BadRequestException(
        'Error al actualizar la Imagen de la noticia',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}}`,
        },
      );
    }
  }

  public async remove(id: number): Promise<NewsImage> {
    const newsImage: NewsImage | null = await this.findOne(id);
    if (!newsImage)
      throw new NotFoundException('Error al eliminar la Imágen de la noticia', {
        cause: new Error(),
        description: 'Imágen de la noticia no encontrado por id',
      });
    try {
      return await this.newsImageRepository.softRemove(newsImage);
    } catch (error) {
      throw new BadRequestException(
        'Error al eliminar la Imágen de la noticia',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}}`,
        },
      );
    }
  }
}
