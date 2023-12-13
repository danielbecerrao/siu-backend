import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { News } from './entities/news.entity';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NewsLog } from './entities/newslog.entity';
import { NewsSubscriber } from './entities/news.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([News]),
    TypeOrmModule.forFeature([NewsLog]),
    forwardRef(() => CaslModule),
  ],
  controllers: [NewsController],
  providers: [NewsService, NewsSubscriber],
  exports: [NewsService],
})
export class NewsModule {}
