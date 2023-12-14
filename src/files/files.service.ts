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
  }
}
