import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { NewsImagesLog } from './news_imageslog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsImage } from './news_images.entity';

@EventSubscriber()
export class NewsSubscriber implements EntitySubscriberInterface<NewsImage> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(NewsImagesLog)
    private readonly newsLogRepository: Repository<NewsImagesLog>,
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
    const address: DeepPartial<NewsImagesLog> = {
      value: event.entity,
      type,
    };
    const addressLog: NewsImagesLog = this.newsLogRepository.create(address);
    await this.newsLogRepository.save(addressLog);
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
