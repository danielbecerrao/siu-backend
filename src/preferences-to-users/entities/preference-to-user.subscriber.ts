import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { PreferenceToUserLog } from './preference-to-userLog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PreferenceToUser } from './preference-to-user.entity';

@EventSubscriber()
export class PreferenceToUserSubscriber
  implements EntitySubscriberInterface<PreferenceToUser>
{
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(PreferenceToUserLog)
    private readonly preferenceToUserLogRepository: Repository<PreferenceToUserLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof PreferenceToUser {
    return PreferenceToUser;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<PreferenceToUser>
      | UpdateEvent<PreferenceToUser>
      | SoftRemoveEvent<PreferenceToUser>,
  ): Promise<void> {
    const user: DeepPartial<PreferenceToUserLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const preferenceToUserLog: PreferenceToUserLog =
      this.preferenceToUserLogRepository.create(user);
    await this.preferenceToUserLogRepository.save(preferenceToUserLog);
  }

  public async afterInsert(
    event: InsertEvent<PreferenceToUser>,
  ): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(
    event: UpdateEvent<PreferenceToUser>,
  ): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(
    event: SoftRemoveEvent<PreferenceToUser>,
  ): Promise<void> {
    await this.createLog(3, event);
  }
}
