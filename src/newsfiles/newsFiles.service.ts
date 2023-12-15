import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { CreateNewsfileDto } from './dto/create-news-file.dto';
import type { UpdateNewsfileDto } from './dto/update-news-file.dto';
import { NewsFile } from './entities/newsFile.entity';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class NewsFilesService {
  public constructor(
    @InjectRepository(NewsFile)
    private readonly newsfileRepository: Repository<NewsFile>,
    private readonly filesService: FilesService,
  ) {}
  public async create(createNewsfileDto: CreateNewsfileDto): Promise<NewsFile> {
    try {
      const newsfile: NewsFile =
        this.newsfileRepository.create(createNewsfileDto);
      return await this.newsfileRepository.save(newsfile);
    } catch (error) {
      throw new BadRequestException('Error al crear Newsfile', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<NewsFile[]> {
    return this.newsfileRepository.find();
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
    updateNewsfileDto: UpdateNewsfileDto,
  ): Promise<NewsFile> {
    const newsfile: NewsFile | null = await this.findOne(id);
    if (!newsfile)
      throw new NotFoundException('Error al actualizar Newsfile', {
        cause: new Error(),
        description: 'Newsfile no encontrado por id',
      });
    try {
      return await this.newsfileRepository.save(
        Object.assign(newsfile, updateNewsfileDto),
      );
    } catch (error) {
      throw new BadRequestException('Error al actualizar Newsfile', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<NewsFile> {
    const newsfile: NewsFile | null = await this.findOne(id);
    if (!newsfile)
      throw new NotFoundException('Error al eliminar Newsfile', {
        cause: new Error(),
        description: 'Newsfile no encontrado por id',
      });
    try {
      return await this.newsfileRepository.softRemove(newsfile);
    } catch (error) {
      throw new BadRequestException('Error al eliminar Newsfile', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }
}
