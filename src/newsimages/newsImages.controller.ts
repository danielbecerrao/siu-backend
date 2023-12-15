import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { NewsImagesService } from './newsImages.service';
import { CreateNewsImageDto } from './dto/create-news-image.dto';
import { UpdateNewsImageDto } from './dto/update-news-image.dto';
import type { NewsImage } from './entities/newsImage.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('newsimages')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Imágenes de noticias')
@ApiBearerAuth()
export class NewsImagesController {
  public constructor(private readonly newsimagesService: NewsImagesService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Newsimage'))
  public async create(
    @Body() createNewsimageDto: CreateNewsImageDto,
  ): Promise<NewsImage> {
    return this.newsimagesService.create(createNewsimageDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Newsimage'))
  public async findAll(): Promise<NewsImage[]> {
    return this.newsimagesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Newsimage'))
  public async findOne(@Param('id') id: string): Promise<NewsImage | null> {
    return this.newsimagesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Newsimage'))
  public async update(
    @Param('id') id: string,
    @Body() updateNewsimageDto: UpdateNewsImageDto,
  ): Promise<NewsImage> {
    return this.newsimagesService.update(+id, updateNewsimageDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Newsimage'))
  public async remove(@Param('id') id: string): Promise<NewsImage> {
    return this.newsimagesService.remove(+id);
  }
}
