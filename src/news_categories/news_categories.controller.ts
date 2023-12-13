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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';
import { NewsCategoriesService } from './news_categories.service';
import type { NewsCategory } from './entities/news_category.entity';
import { CreateNewsCategoryDto } from './dto/create-news_category.dto';
import { UpdateNewsCategoryDto } from './dto/update-news_category.dto';

@Controller('news_categories')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Categorias de noticias')
@ApiBearerAuth()
export class NewsCategoriesController {
  public constructor(
    private readonly newsCategoriesService: NewsCategoriesService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'NewsCategory'))
  public async create(
    @Body() createNewsCategoryDto: CreateNewsCategoryDto,
  ): Promise<NewsCategory> {
    return this.newsCategoriesService.create(createNewsCategoryDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'NewsCategory'))
  public async findAll(): Promise<NewsCategory[]> {
    return this.newsCategoriesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'NewsCategory'))
  public async findOne(@Param('id') id: string): Promise<NewsCategory | null> {
    return this.newsCategoriesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'NewsCategory'))
  public async update(
    @Param('id') id: string,
    @Body() updateNewsCategoryDto: UpdateNewsCategoryDto,
  ): Promise<NewsCategory> {
    return this.newsCategoriesService.update(+id, updateNewsCategoryDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'NewsCategory'))
  public async remove(@Param('id') id: string): Promise<NewsCategory> {
    return this.newsCategoriesService.remove(+id);
  }
}
