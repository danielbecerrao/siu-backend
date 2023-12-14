import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { NewsFileLog } from './newsFilelog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsFile } from './newsFile.entity';

@EventSubscriber()
export class NewsFileSubscriber implements EntitySubscriberInterface<NewsFile> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(NewsFileLog)
    private readonly newsfileLogRepository: Repository<NewsFileLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof NewsFile {
    return NewsFile;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<NewsFile>
      | UpdateEvent<NewsFile>
      | SoftRemoveEvent<NewsFile>,
  ): Promise<void> {
    const newsfile: DeepPartial<NewsFileLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const newsfileLog: NewsFileLog =
      this.newsfileLogRepository.create(newsfile);
    await this.newsfileLogRepository.save(newsfileLog);
  }

  public async afterInsert(event: InsertEvent<NewsFile>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<NewsFile>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(
    event: SoftRemoveEvent<NewsFile>,
  ): Promise<void> {
    await this.createLog(3, event);
  }
}
