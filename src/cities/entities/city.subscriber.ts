import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { CityLog } from './citylog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';

@EventSubscriber()
export class CitySubscriber implements EntitySubscriberInterface<City> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(CityLog)
    private readonly cityLogRepository: Repository<CityLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof City {
    return City;
  }

  public async createLog(
    type: number,
    event: InsertEvent<City> | UpdateEvent<City> | SoftRemoveEvent<City>,
  ): Promise<void> {
    const city: DeepPartial<CityLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const cityLog: CityLog = this.cityLogRepository.create(city);
    await this.cityLogRepository.save(cityLog);
  }

  public async afterInsert(event: InsertEvent<City>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<City>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<City>): Promise<void> {
    await this.createLog(3, event);
  }
}
