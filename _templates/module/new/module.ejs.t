---
to: src/<%=h.inflection.pluralize(name.toLowerCase())%>/<%=h.inflection.pluralize(name.toLowerCase())%>.module.ts
---
<%
 name = h.inflection.singularize(name.toLowerCase())
 names = h.inflection.pluralize(name.toLowerCase())
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
 Names = h.inflection.pluralize(h.inflection.capitalize(name.toLowerCase()))
%>import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { <%=Names%>Controller } from './<%=names%>.controller';
import { <%=Names%>Service } from './<%=names%>.service';
import { <%=Name%> } from './entities/<%=name%>.entity';
import { CaslModule } from '../casl/casl.module';
import { <%=Name%>Log } from './entities/<%=name%>log.entity';
import { <%=Name%>Subscriber } from './entities/<%=name%>.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([<%=Name%>]),
    TypeOrmModule.forFeature([<%=Name%>Log]),
    CaslModule,
  ],
  controllers: [<%=Names%>Controller],
  providers: [<%=Names%>Service, <%=Name%>Subscriber],
})
export class <%=Names%>Module {}
