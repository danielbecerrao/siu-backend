import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as fs from 'fs';
import type { AWSError } from 'aws-sdk/global';
import type {
  MimeType,
  S3Image,
} from 'src/common/interfaces/services.interface';

@Injectable()
export class S3Service {
  private readonly s3: AWS.S3;

  public constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_S3,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_S3,
      region: 'us-east-2',
    });
  }

  public async getAllFiles(): Promise<S3Image[]> {
    try {
      const params = {
        Bucket: 's3metapps',
        Prefix: 'metsiu/img_news/',
      };

      const data = await this.s3.listObjectsV2(params).promise();

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (data && data.Contents) {
        const fileKeys = data.Contents.map(async (item) => {
          if (item.Key) {
            const image = await this.s3
              .getObject({ Bucket: 's3metapps', Key: item.Key })
              .promise();
            return {
              name: item.Key,
              format: '', // Puedes intentar extraer el formato del nombre del archivo si es consistente
              data: image.Body as Buffer,
            };
          } else {
            return null; // Ignora elementos con Key indefinido
          }
        });

        const resolvedImages = await Promise.all(fileKeys);
        return resolvedImages.filter((image) => image !== null) as Array<{
          id: number;
          name: string;
          format: string;
          data: Buffer;
        }>;
      }

      return [];
    } catch (error) {
      return [];
    }
  }

  public async getFile(keyFile: string): Promise<string | null> {
    try {
      const isFile = await this.s3
        .headObject({
          Bucket: 's3metapps',
          Key: keyFile,
        })
        .promise();

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (isFile) {
        const dataFile = this.s3.getSignedUrl('getObject', {
          Bucket: 's3metapps',
          Key: keyFile,
        });

        if (dataFile) {
          return dataFile;
        }
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  public async createFile(
    photo: string,
    keyFile: string,
  ): Promise<AWS.S3.PutObjectOutput> {
    const arr = photo.match(/,(.*)$/);
    const file = arr?.[1] || photo;
    const buf = Buffer.from(file, 'base64');
    const mine = arr?.[1] ? this.base64MimeType(photo) : { mime: 'image/png' };

    const params = {
      Bucket: 's3metapps',
      ContentType: mine.mime,
      Body: buf,
      Key: keyFile,
    };

    const result = await this.s3.putObject(params).promise();

    return result;
  }

  public async deleteFile(keyFile: string): Promise<boolean> {
    try {
      const params = {
        Bucket: 's3metapps',
        Key: keyFile,
      };

      const data = await this.s3.deleteObject(params).promise();

      return !!data.DeleteMarker;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public base64MimeType(encoded: string): MimeType {
    let result: MimeType = {
      ext: '',
      mime: '',
      description: '',
      enabledPlugin: false,
      suffixes: '',
      type: '',
    };

    if (typeof encoded !== 'string') {
      return result;
    }

    const mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);

    if (mime && mime.length) {
      const extract = mime[1];
      result = {
        ext: extract.replace('pdf/', ''),
        mime: extract,
        description: '',
        enabledPlugin: false,
        suffixes: '',
        type: '',
      };
    }

    return result;
  }

  public async downloadObject(
    path: string,
    pathS3: string,
  ): Promise<string | AWS.S3.Body | AWS.S3.GetObjectOutput> {
    const response: { status: boolean; message: AWSError | string } = {
      status: true,
      message: 'Send file successfully',
    };

    try {
      const data = await this.s3
        .getObject({ Bucket: 's3metapps', Key: pathS3 })
        .promise();

      if (data.Body instanceof Buffer) {
        fs.writeFileSync(path, data.Body);
      } else {
        response.status = false;
        response.message = 'No data received from S3 getObject operation';
      }
    } catch (error) {
      response.status = false;
      response.message = error as AWSError;
    }

    return response;
  }
}
