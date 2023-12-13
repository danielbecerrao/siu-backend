import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { NewsCategory } from './entities/news_category.entity';
import { NewsCategoriesService } from './news_categories.service';
import { NewsCategoriesController } from './news_categories.controller';
import { NewsCategoriesLog } from './entities/news_categorylog.entity';
import { NewsCategorySubscriber } from './entities/news_category.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsCategory]),
    TypeOrmModule.forFeature([NewsCategoriesLog]),
    CaslModule,
  ],
  controllers: [NewsCategoriesController],
  providers: [NewsCategoriesService, NewsCategorySubscriber],
})
export class NewsCategoriesModule {}
