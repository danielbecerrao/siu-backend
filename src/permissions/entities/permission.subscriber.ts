import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { PermissionLog } from './permissionlog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './permission.entity';

@EventSubscriber()
export class PermissionSubscriber
  implements EntitySubscriberInterface<Permission>
{
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(PermissionLog)
    private readonly permissionLogRepository: Repository<PermissionLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Permission {
    return Permission;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<Permission>
      | UpdateEvent<Permission>
      | SoftRemoveEvent<Permission>,
  ): Promise<void> {
    const permission: DeepPartial<PermissionLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const permissionLog: PermissionLog =
      this.permissionLogRepository.create(permission);
    await this.permissionLogRepository.save(permissionLog);
  }

  public async afterInsert(event: InsertEvent<Permission>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Permission>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(
    event: SoftRemoveEvent<Permission>,
  ): Promise<void> {
    await this.createLog(3, event);
  }
}
