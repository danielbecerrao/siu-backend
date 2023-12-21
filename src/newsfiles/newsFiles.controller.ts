import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { NewsFilesService } from './newsFiles.service';
import { CreateNewsFileDto } from './dto/create-news-file.dto';
import { UpdateNewsFileDto } from './dto/update-news-file.dto';
import type { NewsFile } from './entities/newsFile.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('newsfiles')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Archivos de noticias')
@ApiBearerAuth()
export class NewsFilesController {
  public constructor(private readonly newsfilesService: NewsFilesService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Newsfile'))
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  public async create(
    @Body() createNewsFileDto: CreateNewsFileDto,
    @UploadedFile() newsFile: Express.Multer.File,
  ): Promise<NewsFile> {
    return this.newsfilesService.create(createNewsFileDto, newsFile);
  }

  @Get('news/:id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Newsfile'))
  public async findAllByNewsId(
    @Param('id') id: string,
  ): Promise<NewsFile[] | null> {
    return this.newsfilesService.findByNewsId(+id);
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
    @Body() updateNewsFileDto: UpdateNewsFileDto,
  ): Promise<NewsFile> {
    return this.newsfilesService.update(+id, updateNewsFileDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Newsfile'))
  public async remove(@Param('id') id: string): Promise<NewsFile> {
    return this.newsfilesService.remove(+id);
  }
}
