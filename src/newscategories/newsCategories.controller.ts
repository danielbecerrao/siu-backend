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
import { NewsCategoriesService } from './newsCategories.service';
import { CreateNewsCategoryDto } from './dto/create-news-category.dto';
import { UpdateNewsCategoryDto } from './dto/update-news-category.dto';
import type { NewsCategory } from './entities/newsCategory.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('newscategories')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Categoria de noticias')
@ApiBearerAuth()
export class NewsCategoriesController {
  public constructor(
    private readonly newscategoriesService: NewsCategoriesService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Newscategory'))
  public async create(
    @Body() createNewscategoryDto: CreateNewsCategoryDto,
  ): Promise<NewsCategory> {
    return this.newscategoriesService.create(createNewscategoryDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Newscategory'))
  public async findAll(): Promise<NewsCategory[]> {
    return this.newscategoriesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Newscategory'))
  public async findOne(@Param('id') id: string): Promise<NewsCategory | null> {
    return this.newscategoriesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Newscategory'))
  public async update(
    @Param('id') id: string,
    @Body() updateNewscategoryDto: UpdateNewsCategoryDto,
  ): Promise<NewsCategory> {
    return this.newscategoriesService.update(+id, updateNewscategoryDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Newscategory'))
  public async remove(@Param('id') id: string): Promise<NewsCategory> {
    return this.newscategoriesService.remove(+id);
  }
}
