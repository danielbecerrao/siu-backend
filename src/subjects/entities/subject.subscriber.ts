import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { SubjectLog } from './subjectlog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './subject.entity';

@EventSubscriber()
export class SubjectSubscriber implements EntitySubscriberInterface<Subject> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(SubjectLog)
    private readonly subjectLogRepository: Repository<SubjectLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Subject {
    return Subject;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<Subject>
      | UpdateEvent<Subject>
      | SoftRemoveEvent<Subject>,
  ): Promise<void> {
    const subject: DeepPartial<SubjectLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const subjectLog: SubjectLog = this.subjectLogRepository.create(subject);
    await this.subjectLogRepository.save(subjectLog);
  }

  public async afterInsert(event: InsertEvent<Subject>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Subject>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<Subject>): Promise<void> {
    await this.createLog(3, event);
  }
}
