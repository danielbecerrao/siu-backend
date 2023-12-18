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
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import type { News } from './entities/news.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('news')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Noticias')
@ApiBearerAuth()
export class NewsController {
  public constructor(private readonly newsService: NewsService) {}

  @Post()
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

  // obtener noticias por categoria
  @Get('category/:id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'New'))
  public async findNewsByCategory(
    @Param('id') id: string,
  ): Promise<News[] | null> {
    return this.newsService.findNewsByCategory(+id);
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
  public async remove(@Param('id') id: string): Promise<News> {
    return this.newsService.remove(+id);
  }
}
