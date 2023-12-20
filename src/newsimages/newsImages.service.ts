import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import type { CreateNewsImageDto } from './dto/create-news-image.dto';
import type { UpdateNewsImageDto } from './dto/update-news-image.dto';
import { NewsImage } from './entities/newsImage.entity';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class NewsImagesService {
  public constructor(
    @InjectRepository(NewsImage)
    private readonly newsimageRepository: Repository<NewsImage>,
    private readonly filesService: FilesService,
    private readonly dataSource: DataSource,
  ) {}

  public async create(
    createNewsimageDto: CreateNewsImageDto,
    image: Express.Multer.File,
  ): Promise<NewsImage> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const newsImage: NewsImage =
        this.newsimageRepository.create(createNewsimageDto);
      newsImage.name = image.originalname;
      const newNewsImage: NewsImage = await queryRunner.manager.save(newsImage);
      await this.filesService.upload(image, 'img_news', newNewsImage.id);
      await queryRunner.commitTransaction();
      return newNewsImage;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException('Error al crear Imagen de noticia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    } finally {
      await queryRunner.release();
    }
  }

  public async findAll(): Promise<NewsImage[]> {
    return this.newsimageRepository.find();
  }

  public async findOne(id: number): Promise<NewsImage | null> {
    const newsImage: NewsImage | null =
      await this.newsimageRepository.findOneBy({
        id,
      });
    if (newsImage) {
      newsImage.name = await this.filesService.getPresignedUrl(
        'news_images',
        newsImage.name,
        newsImage.id,
      );
    }
    return newsImage;
  }

  public async update(
    id: number,
    updateNewsimageDto: UpdateNewsImageDto,
  ): Promise<NewsImage> {
    const newsimage: NewsImage | null = await this.findOne(id);
    if (!newsimage)
      throw new NotFoundException(
        'Error al actualizar la Imagen de la noticia',
        {
          cause: new Error(),
          description: 'Newsimage no encontrado por id',
        },
      );
    try {
      return await this.newsimageRepository.save(
        Object.assign(newsimage, updateNewsimageDto),
      );
    } catch (error) {
      throw new BadRequestException(
        'Error al actualizar la imagen de la noticia',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}}`,
        },
      );
    }
  }

  public async remove(id: number): Promise<NewsImage> {
    const newsimage: NewsImage | null = await this.findOne(id);
    if (!newsimage)
      throw new NotFoundException('Error al eliminar la imagen de la noticia', {
        cause: new Error(),
        description: 'Newsimage no encontrado por id',
      });
    try {
      return await this.newsimageRepository.softRemove(newsimage);
    } catch (error) {
      throw new BadRequestException(
        'Error al eliminar la imagen de la noticia',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}}`,
        },
      );
    }
  }
}
