import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { NewsLog } from './newslog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from './news.entity';

@EventSubscriber()
export class NewsSubscriber implements EntitySubscriberInterface<News> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(NewsLog)
    private readonly newsLogRepository: Repository<NewsLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof News {
    return News;
  }

  public async createLog(
    type: number,
    event: InsertEvent<News> | UpdateEvent<News> | SoftRemoveEvent<News>,
  ): Promise<void> {
    const address: DeepPartial<NewsLog> = {
      value: event.entity,
      type,
    };
    const addressLog: NewsLog = this.newsLogRepository.create(address);
    await this.newsLogRepository.save(addressLog);
  }

  public async afterInsert(event: InsertEvent<News>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<News>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<News>): Promise<void> {
    await this.createLog(3, event);
  }
}
