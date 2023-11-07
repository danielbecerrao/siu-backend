import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { RegionLog } from './regionlog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from './region.entity';

@EventSubscriber()
export class RegionSubscriber implements EntitySubscriberInterface<Region> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(RegionLog)
    private readonly regionLogRepository: Repository<RegionLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Region {
    return Region;
  }

  public async createLog(
    type: number,
    event: InsertEvent<Region> | UpdateEvent<Region> | SoftRemoveEvent<Region>,
  ): Promise<void> {
    const region: DeepPartial<RegionLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const regionLog: RegionLog = this.regionLogRepository.create(region);
    await this.regionLogRepository.save(regionLog);
  }

  public async afterInsert(event: InsertEvent<Region>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Region>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<Region>): Promise<void> {
    await this.createLog(3, event);
  }
}
