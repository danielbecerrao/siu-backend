import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { RoleLog } from './rolelog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';

@EventSubscriber()
export class RoleSubscriber implements EntitySubscriberInterface<Role> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(RoleLog)
    private readonly roleLogRepository: Repository<RoleLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Role {
    return Role;
  }

  public async createLog(
    type: number,
    event: InsertEvent<Role> | UpdateEvent<Role> | SoftRemoveEvent<Role>,
  ): Promise<void> {
    const role: DeepPartial<RoleLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const roleLog: RoleLog = this.roleLogRepository.create(role);
    await this.roleLogRepository.save(roleLog);
  }

  public async afterInsert(event: InsertEvent<Role>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Role>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<Role>): Promise<void> {
    await this.createLog(3, event);
  }
}
