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
import * as sharp from 'sharp';

@Injectable()
export class NewsImagesService {
  public constructor(
    @InjectRepository(NewsImage)
    private readonly newsimageRepository: Repository<NewsImage>,
    private readonly filesService: FilesService,
    private readonly dataSource: DataSource,
  ) {}

  public async resizeImage(
    image: Express.Multer.File,
    width: number,
    height: number,
  ): Promise<Buffer> {
    return sharp(image.buffer)
      .resize({
        width,
        height,
      })
      .jpeg()
      .toBuffer();
  }

  public async addUrl(newsImage: NewsImage): Promise<NewsImage> {
    const signedUrl: string = await this.filesService.getPresignedUrl(
      'img_news',
      newsImage.name,
      newsImage.id,
    );
    const signedUrl2x: string = await this.filesService.getPresignedUrl(
      'img_news',
      `2x${newsImage.name}`,
      newsImage.id,
    );
    newsImage['url'] = signedUrl;
    newsImage['url2x'] = signedUrl2x;
    return newsImage;
  }

  public async create(
    createNewsimageDto: CreateNewsImageDto,
    file: Express.Multer.File,
  ): Promise<NewsImage> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const newsImage: NewsImage =
        this.newsimageRepository.create(createNewsimageDto);
      newsImage.name = file.originalname;
      newsImage.name2x = `2x${file.originalname}`;
      console.log(newsImage);
      const newNewsImage: NewsImage = await queryRunner.manager.save(newsImage);
      const bufferImage: Buffer = await this.resizeImage(file, 462, 316);
      const bufferImage2x: Buffer = await this.resizeImage(file, 3784, 2140);
      await this.filesService.upload(
        bufferImage,
        newNewsImage.name,
        'img_news',
        newNewsImage.id,
      );
      await this.filesService.upload(
        bufferImage2x,
        newNewsImage.name2x,
        'img_news',
        newNewsImage.id,
      );
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

  public async findByNewsId(newsId: number): Promise<NewsImage[]> {
    const newsImages: NewsImage[] = await this.newsimageRepository.find({
      where: {
        newsId,
      },
    });
    return Promise.all(
      newsImages.map(async (newsImage: NewsImage) => {
        return this.addUrl(newsImage);
      }),
    );
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
