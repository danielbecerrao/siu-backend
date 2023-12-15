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
import { NewsFilesService } from './newsFiles.service';
import { CreateNewsfileDto } from './dto/create-news-file.dto';
import { UpdateNewsfileDto } from './dto/update-news-file.dto';
import type { NewsFile } from './entities/newsFile.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('newsfiles')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Archivos de noticias')
@ApiBearerAuth()
export class NewsFilesController {
  public constructor(private readonly newsfilesService: NewsFilesService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Newsfile'))
  public async create(
    @Body() createNewsfileDto: CreateNewsfileDto,
  ): Promise<NewsFile> {
    return this.newsfilesService.create(createNewsfileDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Newsfile'))
  public async findAll(): Promise<NewsFile[]> {
    return this.newsfilesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Newsfile'))
  public async findOne(@Param('id') id: string): Promise<NewsFile | null> {
    return this.newsfilesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Newsfile'))
  public async update(
    @Param('id') id: string,
    @Body() updateNewsfileDto: UpdateNewsfileDto,
  ): Promise<NewsFile> {
    return this.newsfilesService.update(+id, updateNewsfileDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Newsfile'))
  public async remove(@Param('id') id: string): Promise<NewsFile> {
    return this.newsfilesService.remove(+id);
  }
}
