import {
<<<<<<< HEAD
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
=======
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
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import type { News } from './entities/news.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee

@Controller('news')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Noticias')
@ApiBearerAuth()
export class NewsController {
  public constructor(private readonly newsService: NewsService) {}

  @Post()
<<<<<<< HEAD
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
=======
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'New'))
  public async create(@Body() createNewDto: CreateNewsDto): Promise<News> {
    return this.newsService.create(createNewDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'New'))
  public async findAll(): Promise<News[]> {
    return this.newsService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'New'))
  public async findOneParent(@Param('id') id: string): Promise<News | null> {
    return this.newsService.findOneParent(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'New'))
  public async update(
    @Param('id') id: string,
    @Body() updateNewDto: UpdateNewsDto,
  ): Promise<News> {
    return this.newsService.update(+id, updateNewDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'New'))
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
  public async remove(@Param('id') id: string): Promise<News> {
    return this.newsService.remove(+id);
  }
}
