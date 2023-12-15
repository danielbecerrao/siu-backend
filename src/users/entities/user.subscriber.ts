import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  RecoverEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { UserLog } from './userlog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(UserLog)
    private readonly userLogRepository: Repository<UserLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof User {
    return User;
  }

  public async createLog(
    type: number,
    event: InsertEvent<User> | UpdateEvent<User> | SoftRemoveEvent<User>,
  ): Promise<void> {
    const user: DeepPartial<UserLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    if (this.cls.get('user')) {
      const userLog: UserLog = this.userLogRepository.create(user);
      await this.userLogRepository.save(userLog);
    }
  }

  public async afterInsert(event: InsertEvent<User>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<User>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<User>): Promise<void> {
    await this.createLog(3, event);
  }
}
