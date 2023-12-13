import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';
import type { NewsImage } from './entities/news_images.entity';
import type { NewsImageType } from './entities/types.entity';
import { NewsImageTypeService } from './newsImageTypes..service';
import { NewsImagesService } from './news_images.service';
import type { CreateNewsImageDto } from './dto/create-news_image.dto';
import type { UpdateNewsImageDto } from './dto/update-news_image.dto';
import { S3Service } from 'src/aws/s3.service';

@Controller('news_images')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Imagenes noticias')
@ApiBearerAuth()
export class NewsImagesController {
  public constructor(
    private readonly newsImagesService: NewsImagesService,
    private readonly newsImageTypeService: NewsImageTypeService,
    private readonly s3Service: S3Service,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'NewsImage'))
  public async create(
    @UploadedFile() file: Express.Multer.File,
    @Body('data') jsonData: string,
  ): Promise<NewsImage> {
    const data = JSON.parse(jsonData);
    const keyFile: string = 'metsiu/img_news/';

    const createNewsImageDto: CreateNewsImageDto = {
      newsId: data.newsId,
      newsImageTypesId: data.newsImageTypeId,
      name: data.name,
      description: data.description,
      url: keyFile,
      filepath: file.originalname,
      format: file.mimetype,
      image: '',
    };

    const createNewsImage =
      await this.newsImagesService.create(createNewsImageDto);

    await this.s3Service.createFile(
      file.buffer.toString('base64'),
      keyFile + createNewsImage.id,
    );

    createNewsImageDto.url = keyFile + createNewsImage.id;

    await this.newsImagesService.update(createNewsImage.id, createNewsImageDto);

    return createNewsImage;
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'NewsImage'))
  public async findAll(): Promise<unknown> {
    const allNewsImagesData = await this.newsImagesService.findAll();

    const newsImageData = await Promise.all(
      allNewsImagesData.map(async (newsImage) => {
        const imageS3 = await this.s3Service.getFile(newsImage.url);

        const data = {
          id: newsImage.id,
          newsId: newsImage.newsId,
          newsImageTypesId: newsImage.newsImageTypesId,
          name: newsImage.name,
          description: newsImage.description,
          url: newsImage.url,
          filepath: newsImage.filepath,
          format: newsImage.format,
          image: imageS3,
          createdAt: newsImage.createdAt,
          updatedAt: newsImage.updatedAt,
          deletedAt: newsImage.deletedAt ? newsImage.deletedAt : null,
        };
        return data;
      }),
    );

    return newsImageData;
  }

  @Get('types')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'NewsImage'))
  public async findTypes(): Promise<NewsImageType[]> {
    return this.newsImageTypeService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'NewsImage'))
  public async findOne(@Param('id') id: string): Promise<NewsImage | null> {
    const newsImage = await this.newsImagesService.findOne(+id);
    let data;
    if (newsImage) {
      const imageS3 = await this.s3Service.getFile(newsImage.url);
      data = {
        id: newsImage.id,
        newsId: newsImage.newsId,
        newsImageTypesId: newsImage.newsImageTypesId,
        name: newsImage.name,
        description: newsImage.description,
        url: newsImage.url,
        filepath: newsImage.filepath,
        format: newsImage.format,
        image: imageS3,
        createdAt: newsImage.createdAt,
        updatedAt: newsImage.updatedAt,
        deletedAt: newsImage.deletedAt ? newsImage.deletedAt : null,
      };
    }

    return data;
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'NewsImage'))
  public async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('data') jsonData: string,
  ): Promise<NewsImage> {
    const data = JSON.parse(jsonData);
    const keyFile: string = 'metsiu/img_news/';

    const updateNewsImageDto: UpdateNewsImageDto = {
      newsId: data.newsId,
      newsImageTypesId: data.newsImageTypeId,
      name: data.name,
      description: data.description,
      url: keyFile,
      filepath: file.originalname,
      format: file.mimetype,
      image: '',
    };

    const updateNewsImage = await this.newsImagesService.update(
      +id,
      updateNewsImageDto,
    );

    if (await this.s3Service.deleteFile(keyFile + updateNewsImage.id)) {
      await this.s3Service.createFile(
        file.buffer.toString('base64'),
        keyFile + updateNewsImage.id,
      );
    }

    return updateNewsImage;
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'NewsImage'))
  public async remove(@Param('id') id: string): Promise<NewsImage> {
    const newsImage = await this.newsImagesService.findOne(+id);

    if (newsImage) {
      await this.s3Service.deleteFile(newsImage.url);
    }

    return this.newsImagesService.remove(+id);
  }
}
