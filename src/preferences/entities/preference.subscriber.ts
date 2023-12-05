import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { PreferenceLog } from './preferencelog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Preference } from './preference.entity';

@EventSubscriber()
export class PreferenceSubscriber
  implements EntitySubscriberInterface<Preference>
{
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(PreferenceLog)
    private readonly preferenceLogRepository: Repository<PreferenceLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Preference {
    return Preference;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<Preference>
      | UpdateEvent<Preference>
      | SoftRemoveEvent<Preference>,
  ): Promise<void> {
    const preference: DeepPartial<PreferenceLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const preferenceLog: PreferenceLog =
      this.preferenceLogRepository.create(preference);
    await this.preferenceLogRepository.save(preferenceLog);
  }

  public async afterInsert(event: InsertEvent<Preference>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Preference>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(
    event: SoftRemoveEvent<Preference>,
  ): Promise<void> {
    await this.createLog(3, event);
  }
}
