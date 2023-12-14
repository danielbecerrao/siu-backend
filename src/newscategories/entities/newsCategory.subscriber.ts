import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { NewsCategoryLog } from './newsCategorylog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsCategory } from './newsCategory.entity';

@EventSubscriber()
export class NewsCategorySubscriber
  implements EntitySubscriberInterface<NewsCategory>
{
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(NewsCategoryLog)
    private readonly newscategoryLogRepository: Repository<NewsCategoryLog>,
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
    const newscategory: DeepPartial<NewsCategoryLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const newscategoryLog: NewsCategoryLog =
      this.newscategoryLogRepository.create(newscategory);
    await this.newscategoryLogRepository.save(newscategoryLog);
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
