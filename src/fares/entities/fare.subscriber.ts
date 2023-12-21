import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { InjectRepository } from '@nestjs/typeorm';
import { Fare } from './fare.entity';
import { FareLog } from './farelog.entity';

@EventSubscriber()
export class FareSubscriber implements EntitySubscriberInterface<Fare> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(FareLog)
    private readonly fareLogRepository: Repository<FareLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Fare {
    return Fare;
  }

  public async createLog(
    type: number,
    event: InsertEvent<Fare> | UpdateEvent<Fare> | SoftRemoveEvent<Fare>,
  ): Promise<void> {
    const fare: DeepPartial<FareLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const fareLog: FareLog = this.fareLogRepository.create(fare);
    await this.fareLogRepository.save(fareLog);
  }

  public async afterInsert(event: InsertEvent<Fare>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Fare>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<Fare>): Promise<void> {
    await this.createLog(3, event);
  }
}
