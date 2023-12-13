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
import type { File } from './entities/file.entity';
import { FilesService } from './files.service';
import { S3Service } from 'src/aws/s3.service';
import type { FileData } from 'src/common/interfaces/services.interface';
import type { CreateFileDto } from './dto/create-file.dto';
import type { UpdateFileDto } from './dto/update-file.dto';

@Controller('files')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Archivos')
@ApiBearerAuth()
export class FilesController {
  public constructor(
    private readonly filesService: FilesService,
    private readonly s3Service: S3Service,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'File'))
  public async create(
    @UploadedFile() file: Express.Multer.File,
    @Body('data') jsonData: string,
  ): Promise<File> {
    const data = JSON.parse(jsonData);
    const keyFile: string = 'metsiu/files/';

    const createFileDto: CreateFileDto = {
      newsId: data.newsId,
      name: data.name,
      description: data.description,
      url: keyFile,
      filepath: file.originalname,
      format: file.mimetype,
      file: '',
    };

    const createFile = await this.filesService.create(createFileDto);

    await this.s3Service.createFile(
      file.buffer.toString('base64'),
      keyFile + createFile.id,
    );

    createFileDto.url = keyFile + createFile.id;

    await this.filesService.update(createFile.id, createFileDto);

    return createFile;
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'File'))
  public async findAll(): Promise<unknown> {
    const allFilesData = await this.filesService.findAll();

    const filesData = await Promise.all(
      allFilesData.map(async (file) => {
        const fileS3 = await this.s3Service.getFile(file.url);

        const data = {
          id: file.id,
          newsId: file.newsId,
          name: file.name,
          description: file.description,
          url: file.url,
          filepath: file.filepath,
          format: file.format,
          file: fileS3,
          createdAt: file.createdAt,
          updatedAt: file.updatedAt,
          deletedAt: file.deletedAt ? file.deletedAt : null,
        };
        return data;
      }),
    );

    return filesData;
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'File'))
  public async findOne(@Param('id') id: string): Promise<FileData | null> {
    const file = await this.filesService.findOne(+id);
    let data;
    if (file) {
      const fileS3 = await this.s3Service.getFile(file.url);
      data = {
        id: file.id,
        newsId: file.newsId,
        name: file.name,
        description: file.description,
        url: file.url,
        filepath: file.filepath,
        format: file.format,
        file: fileS3,
        createdAt: file.createdAt,
        updatedAt: file.updatedAt,
        deletedAt: file.deletedAt ? file.deletedAt : null,
      };

      return data;
    }

    return file;
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'File'))
  public async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('data') jsonData: string,
  ): Promise<File> {
    console.log(jsonData);
    const data = JSON.parse(jsonData);
    const keyFile: string = 'metsiu/files/';

    const updateFileDto: UpdateFileDto = {
      newsId: data.newsId,
      name: data.name,
      description: data.description,
      url: keyFile,
      filepath: file.originalname,
      format: file.mimetype,
      file: '',
    };

    const updateFile = await this.filesService.update(+id, updateFileDto);

    if (await this.s3Service.deleteFile(keyFile + updateFile.id)) {
      await this.s3Service.createFile(
        file.buffer.toString('base64'),
        keyFile + updateFile.id,
      );
    }

    return updateFile;
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'File'))
  public async remove(@Param('id') id: string): Promise<File> {
    const newsFile = await this.filesService.findOne(+id);

    if (newsFile) {
      await this.s3Service.deleteFile(newsFile.url);
    }
    return this.filesService.remove(+id);
  }
}
