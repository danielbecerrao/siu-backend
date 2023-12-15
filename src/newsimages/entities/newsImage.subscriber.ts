import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { NewsImageLog } from './newsImagelog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsImage } from './newsImage.entity';

@EventSubscriber()
export class NewsImageSubscriber
  implements EntitySubscriberInterface<NewsImage>
{
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(NewsImageLog)
    private readonly newsimageLogRepository: Repository<NewsImageLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof NewsImage {
    return NewsImage;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<NewsImage>
      | UpdateEvent<NewsImage>
      | SoftRemoveEvent<NewsImage>,
  ): Promise<void> {
    const newsimage: DeepPartial<NewsImageLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const newsimageLog: NewsImageLog =
      this.newsimageLogRepository.create(newsimage);
    await this.newsimageLogRepository.save(newsimageLog);
  }

  public async afterInsert(event: InsertEvent<NewsImage>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<NewsImage>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(
    event: SoftRemoveEvent<NewsImage>,
  ): Promise<void> {
    await this.createLog(3, event);
  }
}
