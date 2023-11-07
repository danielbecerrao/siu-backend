import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { ActionLog } from './actionlog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Action } from './action.entity';

@EventSubscriber()
export class ActionSubscriber implements EntitySubscriberInterface<Action> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(ActionLog)
    private readonly actionLogRepository: Repository<ActionLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Action {
    return Action;
  }

  public async createLog(
    type: number,
    event: InsertEvent<Action> | UpdateEvent<Action> | SoftRemoveEvent<Action>,
  ): Promise<void> {
    const action: DeepPartial<ActionLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const actionLog: ActionLog = this.actionLogRepository.create(action);
    await this.actionLogRepository.save(actionLog);
  }

  public async afterInsert(event: InsertEvent<Action>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Action>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<Action>): Promise<void> {
    await this.createLog(3, event);
  }
}
