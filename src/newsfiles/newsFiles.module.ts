import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsFilesController } from './newsFiles.controller';
import { NewsFilesService } from './newsFiles.service';
import { NewsFile } from './entities/newsFile.entity';
import { CaslModule } from '../casl/casl.module';
import { NewsFileLog } from './entities/newsFilelog.entity';
import { NewsFileSubscriber } from './entities/newsFile.subscriber';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsFile]),
    TypeOrmModule.forFeature([NewsFileLog]),
    CaslModule,
    FilesModule,
  ],
  controllers: [NewsFilesController],
  providers: [NewsFilesService, NewsFileSubscriber],
})
export class NewsFilesModule {}
