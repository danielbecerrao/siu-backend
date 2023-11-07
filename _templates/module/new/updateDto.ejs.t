---
to: src/<%=h.inflection.pluralize(name.toLowerCase())%>/dto/update-<%=h.inflection.singularize(name.toLowerCase())%>.dto.ts
---
<%
 name = h.inflection.singularize(name.toLowerCase())
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
%>import { PartialType } from '@nestjs/swagger';
import { Create<%=Name%>Dto } from './create-<%=name%>.dto';

export class Update<%=Name%>Dto extends PartialType(Create<%=Name%>Dto) {}
