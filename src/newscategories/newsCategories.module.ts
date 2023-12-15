import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsCategoriesController } from './newsCategories.controller';
import { NewsCategoriesService } from './newsCategories.service';
import { NewsCategory } from './entities/newsCategory.entity';
import { CaslModule } from '../casl/casl.module';
import { NewsCategoryLog } from './entities/newsCategorylog.entity';
import { NewsCategorySubscriber } from './entities/newsCategory.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsCategory]),
    TypeOrmModule.forFeature([NewsCategoryLog]),
    CaslModule,
  ],
  controllers: [NewsCategoriesController],
  providers: [NewsCategoriesService, NewsCategorySubscriber],
})
export class NewsCategoriesModule {}
