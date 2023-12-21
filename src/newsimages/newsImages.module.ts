import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsImagesController } from './newsImages.controller';
import { NewsImagesService } from './newsImages.service';
import { NewsImage } from './entities/newsImage.entity';
import { CaslModule } from '../casl/casl.module';
import { NewsImageLog } from './entities/newsImagelog.entity';
import { NewsImageSubscriber } from './entities/newsImage.subscriber';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsImage]),
    TypeOrmModule.forFeature([NewsImageLog]),
    CaslModule,
    FilesModule,
  ],
  controllers: [NewsImagesController],
  providers: [NewsImagesService, NewsImageSubscriber],
})
export class NewsImagesModule {}
