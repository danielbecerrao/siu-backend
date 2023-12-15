<<<<<<< HEAD
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { File } from './entities/file.entity';
import type { CreateFileDto } from './dto/create-file.dto';
import type { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FilesService {
  public constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
    private readonly dataSource: DataSource,
  ) {}
  public async create(createFileDto: CreateFileDto): Promise<File> {
    try {
      const file: File = this.fileRepository.create(createFileDto);
      return await this.fileRepository.save(file);
    } catch (error) {
      throw new BadRequestException('Error al crear el Archivo', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async findAll(): Promise<File[]> {
    return this.fileRepository.find();
  }

  public async findOne(id: number): Promise<File | null> {
    return this.fileRepository.findOneBy({ id });
  }

  public async update(id: number, updateFileDto: UpdateFileDto): Promise<File> {
    const file: File | null = await this.findOne(id);
    if (!file)
      throw new NotFoundException('Error al actualizar el Archivo', {
        cause: new Error(),
        description: 'Archivo de la noticia no encontrada por id',
      });
    try {
      return await this.fileRepository.save(Object.assign(file, updateFileDto));
    } catch (error) {
      throw new BadRequestException('Error al actualizar el Archivo', {
        cause: new Error(),
        description: `Ocurrió un error en el servidor: ${error}}`,
      });
    }
  }

  public async remove(id: number): Promise<File> {
    const newsImage: File | null = await this.findOne(id);
    if (!newsImage)
      throw new NotFoundException('Error al eliminar el Archivo', {
        cause: new Error(),
        description: 'Archivo de la noticia no encontrado por id',
      });
    try {
      return await this.fileRepository.softRemove(newsImage);
    } catch (error) {
      throw new BadRequestException(
        'Error al eliminar el Archivo de la noticia',
        {
          cause: new Error(),
          description: `Ocurrió un error en el servidor: ${error}}`,
        },
      );
    }
=======
import { Injectable } from '@nestjs/common';
import {
  PutObjectCommand,
  GetObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class FilesService {
  public constructor(private readonly configService: ConfigService) {}

  private readonly s3Client = new S3Client({
    region: this.configService.getOrThrow<string>('AWS_BUCKET_REGION'),
    credentials: {
      accessKeyId: this.configService.getOrThrow<string>('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.getOrThrow<string>(
        'AWS_SECRET_ACCESS_KEY',
      ),
    },
  });

  public async upload(
    file: Express.Multer.File,
    folder: string,
    id: number,
  ): Promise<void> {
    const command: PutObjectCommand = new PutObjectCommand({
      Bucket: this.configService.getOrThrow<string>('AWS_BUCKET_NAME'),
      Key: `${this.configService.getOrThrow<string>(
        'AWS_MAIN_FOLDER',
      )}/${folder}/${id}-${file.originalname}`,
      Body: file.buffer,
    });
    await this.s3Client.send(command);
  }

  public async getPresignedUrl(
    folder: string,
    filename: string,
    id: number,
  ): Promise<string> {
    const command: GetObjectCommand = new GetObjectCommand({
      Bucket: this.configService.getOrThrow<string>('AWS_BUCKET_NAME'),
      Key: `${this.configService.getOrThrow<string>(
        'AWS_MAIN_FOLDER',
      )}/${folder}/${id}-${filename}`,
    });
    return getSignedUrl(this.s3Client, command, { expiresIn: 3600 });
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
  }
}
