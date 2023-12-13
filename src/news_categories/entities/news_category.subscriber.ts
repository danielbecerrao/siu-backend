import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { NewsCategoriesLog } from './news_categorylog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsCategory } from './news_category.entity';

@EventSubscriber()
export class NewsCategorySubscriber
  implements EntitySubscriberInterface<NewsCategory>
{
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(NewsCategoriesLog)
    private readonly newsCategoriesLogRepository: Repository<NewsCategoriesLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof NewsCategory {
    return NewsCategory;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<NewsCategory>
      | UpdateEvent<NewsCategory>
      | SoftRemoveEvent<NewsCategory>,
  ): Promise<void> {
    const newsCategory: DeepPartial<NewsCategoriesLog> = {
      value: event.entity,
      type,
    };
    const newsCategoriesLog: NewsCategoriesLog =
      this.newsCategoriesLogRepository.create(newsCategory);
    await this.newsCategoriesLogRepository.save(newsCategoriesLog);
  }

  public async afterInsert(event: InsertEvent<NewsCategory>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<NewsCategory>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(
    event: SoftRemoveEvent<NewsCategory>,
  ): Promise<void> {
    await this.createLog(3, event);
  }
}
