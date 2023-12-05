import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { ClientLog } from './clientlog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';

@EventSubscriber()
export class ClientSubscriber implements EntitySubscriberInterface<Client> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(ClientLog)
    private readonly clientLogRepository: Repository<ClientLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Client {
    return Client;
  }

  public async createLog(
    type: number,
    event: InsertEvent<Client> | UpdateEvent<Client> | SoftRemoveEvent<Client>,
  ): Promise<void> {
    const client: DeepPartial<ClientLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const clientLog: ClientLog = this.clientLogRepository.create(client);
    await this.clientLogRepository.save(clientLog);
  }

  public async afterInsert(event: InsertEvent<Client>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Client>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<Client>): Promise<void> {
    await this.createLog(3, event);
  }
}
