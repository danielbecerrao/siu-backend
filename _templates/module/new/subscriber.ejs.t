---
to: src/<%=h.inflection.pluralize(name.toLowerCase())%>/entities/<%=h.inflection.singularize(name.toLowerCase())%>.subscriber.ts
---
<%
 name = h.inflection.singularize(name.toLowerCase())
 names = h.inflection.pluralize(name.toLowerCase())
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
%>import type {
  DeepPartial,
  EntitySubscriberInterface,
  InsertEvent,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { DataSource, EventSubscriber, Repository } from 'typeorm';
import { ClsService } from 'nestjs-cls';
import { <%=Name%>Log } from './<%=name%>log.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { <%=Name%> } from './<%=name%>.entity';

@EventSubscriber()
export class <%=Name%>Subscriber implements EntitySubscriberInterface<<%=Name%>> {
  public constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(<%=Name%>Log)
    private readonly <%=name%>LogRepository: Repository<<%=Name%>Log>,
  ) {
    dataSource.subscribers.push(this);
  }

  public listenTo(): typeof <%=Name%> {
    return <%=Name%>;
  }

  public async createLog(
    type: number,
    event:
      | InsertEvent<<%=Name%>>
      | UpdateEvent<<%=Name%>>
      | SoftRemoveEvent<<%=Name%>>,
  ): Promise<void> {
    const <%=name%>: DeepPartial<<%=Name%>Log> = {
      value: event.entity,
      user: this.cls.get('user'),
      type,
    };
    const <%=name%>Log: <%=Name%>Log = this.<%=name%>LogRepository.create(<%=name%>);
    await this.<%=name%>LogRepository.save(<%=name%>Log);
  }

  public async afterInsert(event: InsertEvent<<%=Name%>>): Promise<void> {
    await this.createLog(1, event);
  }

  public async afterUpdate(event: UpdateEvent<<%=Name%>>): Promise<void> {
    await this.createLog(2, event);
  }

  public async afterSoftRemove(event: SoftRemoveEvent<<%=Name%>>): Promise<void> {
    await this.createLog(3, event);
  }
}
