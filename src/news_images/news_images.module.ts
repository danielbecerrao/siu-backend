import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { NewsImage } from './entities/news_images.entity';
import { NewsImageType } from './entities/types.entity';
import { NewsImagesService } from './news_images.service';
import { NewsImageTypeService } from './newsImageTypes..service';
import { NewsImagesController } from './news_images.controller';
import { NewsImagesLog } from './entities/news_imageslog.entity';
import { S3Service } from 'src/aws/s3.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsImage, NewsImageType]),
    TypeOrmModule.forFeature([NewsImagesLog]),
    forwardRef(() => CaslModule),
  ],
  controllers: [NewsImagesController],
  providers: [NewsImagesService, NewsImageTypeService, S3Service],
})
export class NewsImagesModule {}
