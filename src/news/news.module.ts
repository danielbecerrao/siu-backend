<<<<<<< HEAD
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { News } from './entities/news.entity';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
=======
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { News } from './entities/news.entity';
import { CaslModule } from '../casl/casl.module';
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
import { NewsLog } from './entities/newslog.entity';
import { NewsSubscriber } from './entities/news.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([News]),
    TypeOrmModule.forFeature([NewsLog]),
<<<<<<< HEAD
    forwardRef(() => CaslModule),
  ],
  controllers: [NewsController],
  providers: [NewsService, NewsSubscriber],
  exports: [NewsService],
=======
    CaslModule,
  ],
  controllers: [NewsController],
  providers: [NewsService, NewsSubscriber],
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
})
export class NewsModule {}
