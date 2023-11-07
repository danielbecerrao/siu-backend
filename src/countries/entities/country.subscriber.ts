import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { CountryLog } from './countrylog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './country.entity';

@EventSubscriber()
export class CountrySubscriber implements EntitySubscriberInterface<Country> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(CountryLog)
    private readonly countryLogRepository: Repository<CountryLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Country {
    return Country;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<Country>
      | UpdateEvent<Country>
      | SoftRemoveEvent<Country>,
  ): Promise<void> {
    const country: DeepPartial<CountryLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const countryLog: CountryLog = this.countryLogRepository.create(country);
    await this.countryLogRepository.save(countryLog);
  }

  public async afterInsert(event: InsertEvent<Country>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Country>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<Country>): Promise<void> {
    await this.createLog(3, event);
  }
}
