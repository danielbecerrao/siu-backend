import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import type { CreateNewsFileDto } from './dto/create-news-file.dto';
import type { UpdateNewsFileDto } from './dto/update-news-file.dto';
import { NewsFile } from './entities/newsFile.entity';
import { FilesService } from '../files/files.service';

@Injectable()
export class NewsFilesService {
  public constructor(
    @InjectRepository(NewsFile)
    private readonly newsfileRepository: Repository<NewsFile>,
    private readonly filesService: FilesService,
    private readonly dataSource: DataSource,
  ) {}

  private async addUrl(newsFile: NewsFile): Promise<NewsFile> {
    const signedUrl: string = await this.filesService.getPresignedUrl(
      'img_files',
      newsFile.name,
      newsFile.id,
    );
    newsFile['url'] = signedUrl;
    return newsFile;
  }

  public async create(
    createNewsfileDto: CreateNewsFileDto,
    file: Express.Multer.File,
  ): Promise<NewsFile> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const newsFile: NewsFile =
        this.newsfileRepository.create(createNewsfileDto);
      newsFile.name = file.originalname;
      const newNewsFile: NewsFile = await queryRunner.manager.save(newsFile);
      await this.filesService.upload(
        file.buffer,
        file.originalname,
        'img_news',
        newNewsFile.id,
      );
      await queryRunner.commitTransaction();
      return newNewsFile;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException('Error al crear Archivo de noticia', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}`,
      });
    } finally {
      await queryRunner.release();
    }
  }

  public async findByNewsId(newsId: number): Promise<NewsFile[]> {
    const newsFiles: NewsFile[] = await this.newsfileRepository.find({
      where: {
        newsId,
      },
    });
    return Promise.all(
      newsFiles.map(async (newsImage: NewsFile) => {
        return this.addUrl(newsImage);
      }),
    );
  }

  public async findOne(id: number): Promise<NewsFile | null> {
    const newsFile: NewsFile | null = await this.newsfileRepository.findOneBy({
      id,
    });
    if (newsFile) {
      newsFile.name = await this.filesService.getPresignedUrl(
        'news_files',
        newsFile.name,
        newsFile.id,
      );
    }
    return newsFile;
  }

  public async update(
    id: number,
    updateNewsfileDto: UpdateNewsFileDto,
  ): Promise<NewsFile> {
    const newsfile: NewsFile | null = await this.findOne(id);
    if (!newsfile)
      throw new NotFoundException(
        'Error al actualizar el archivo de la noticia',
        {
          cause: new Error(),
          description: 'Archivo no encontrado por id',
        },
      );
    try {
      return await this.newsfileRepository.save(
        Object.assign(newsfile, updateNewsfileDto),
      );
    } catch (error) {
      throw new BadRequestException(
        'Error al actualizar la archivo de la noticia',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}}`,
        },
      );
    }
  }

  public async remove(id: number): Promise<NewsFile> {
    const newsfile: NewsFile | null = await this.findOne(id);
    if (!newsfile)
      throw new NotFoundException(
        'Error al eliminar el archivo de la noticia',
        {
          cause: new Error(),
          description: 'Archivo de la noticia no encontrado por id',
        },
      );
    try {
      return await this.newsfileRepository.softRemove(newsfile);
    } catch (error) {
      throw new BadRequestException(
        'Error al eliminar el archivo de la noticia',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}}`,
        },
      );
    }
  }
}
