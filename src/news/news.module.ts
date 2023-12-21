import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { News } from './entities/news.entity';
import { CaslModule } from '../casl/casl.module';
import { NewsLog } from './entities/newslog.entity';
import { NewsSubscriber } from './entities/news.subscriber';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([News]),
    TypeOrmModule.forFeature([NewsLog]),
    CaslModule,
    FilesModule,
  ],
  controllers: [NewsController],
  providers: [NewsService, NewsSubscriber],
})
export class NewsModule {}
