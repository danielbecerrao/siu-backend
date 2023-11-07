import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { SiteLog } from './sitelog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from './site.entity';

@EventSubscriber()
export class SiteSubscriber implements EntitySubscriberInterface<Site> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(SiteLog)
    private readonly siteLogRepository: Repository<SiteLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Site {
    return Site;
  }

  public async createLog(
    type: number,
    event: InsertEvent<Site> | UpdateEvent<Site> | SoftRemoveEvent<Site>,
  ): Promise<void> {
    const site: DeepPartial<SiteLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const siteLog: SiteLog = this.siteLogRepository.create(site);
    await this.siteLogRepository.save(siteLog);
  }

  public async afterInsert(event: InsertEvent<Site>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Site>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<Site>): Promise<void> {
    await this.createLog(3, event);
  }
}
