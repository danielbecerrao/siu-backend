import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import type { Paginated } from 'nestjs-paginate';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';
import type { News } from './entities/news.entity';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Controller('news')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Noticias')
@ApiBearerAuth()
export class NewsController {
  public constructor(private readonly newsService: NewsService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'News'))
  public async create(@Body() createNewsDto: CreateNewsDto): Promise<News> {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'News'))
  public async findAll(
    @Paginate() query: PaginateQuery,
  ): Promise<Paginated<News>> {
    console.log(query);
    return this.newsService.findAll(query);
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'News'))
  public async findOne(@Param('id') id: string): Promise<News | null> {
    return this.newsService.findOne(+id);
  }

  @Get('category/:categoryId')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'News'))
  public async findByCategory(
    @Param('categoryId') categoryId: number,
  ): Promise<News[] | null> {
    return this.newsService.findByCategory(categoryId);
  }

  @Get(':id/children')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'News'))
  public async findChildren(@Param('id') id: number): Promise<News[] | null> {
    return this.newsService.findChildren(id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'News'))
  public async update(
    @Param('id') id: string,
    @Body() updateNewsDto: UpdateNewsDto,
  ): Promise<News> {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'News'))
  public async remove(@Param('id') id: string): Promise<News> {
    return this.newsService.remove(+id);
  }
}
