import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { SubregionLog } from './subregionlog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Subregion } from './subregion.entity';

@EventSubscriber()
export class SubregionSubscriber
  implements EntitySubscriberInterface<Subregion>
{
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(SubregionLog)
    private readonly subregionLogRepository: Repository<SubregionLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Subregion {
    return Subregion;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<Subregion>
      | UpdateEvent<Subregion>
      | SoftRemoveEvent<Subregion>,
  ): Promise<void> {
    const subregion: DeepPartial<SubregionLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const subregionLog: SubregionLog =
      this.subregionLogRepository.create(subregion);
    await this.subregionLogRepository.save(subregionLog);
  }

  public async afterInsert(event: InsertEvent<Subregion>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Subregion>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(
    event: SoftRemoveEvent<Subregion>,
  ): Promise<void> {
    await this.createLog(3, event);
  }
}
