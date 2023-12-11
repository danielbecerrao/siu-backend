import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { AddressLog } from './addresslog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';

@EventSubscriber()
export class AddressSubscriber implements EntitySubscriberInterface<Address> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(AddressLog)
    private readonly addressLogRepository: Repository<AddressLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Address {
    return Address;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<Address>
      | UpdateEvent<Address>
      | SoftRemoveEvent<Address>,
  ): Promise<void> {
    const address: DeepPartial<AddressLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const addressLog: AddressLog = this.addressLogRepository.create(address);
    await this.addressLogRepository.save(addressLog);
  }

  public async afterInsert(event: InsertEvent<Address>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Address>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<Address>): Promise<void> {
    await this.createLog(3, event);
  }
}
