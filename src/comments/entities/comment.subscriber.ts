import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { CommentLog } from './commentlog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';

@EventSubscriber()
export class CommentSubscriber implements EntitySubscriberInterface<Comment> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(CommentLog)
    private readonly commentLogRepository: Repository<CommentLog>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof Comment {
    return Comment;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<Comment>
      | UpdateEvent<Comment>
      | SoftRemoveEvent<Comment>,
  ): Promise<void> {
    const comment: DeepPartial<CommentLog> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const commentLog: CommentLog = this.commentLogRepository.create(comment);
    await this.commentLogRepository.save(commentLog);
  }

  public async afterInsert(event: InsertEvent<Comment>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<Comment>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<Comment>): Promise<void> {
    await this.createLog(3, event);
  }
}
