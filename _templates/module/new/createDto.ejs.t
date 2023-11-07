---
to: src/<%=h.inflection.pluralize(name.toLowerCase())%>/dto/create-<%=h.inflection.singularize(name.toLowerCase())%>.dto.ts
---
<%
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
%>import { IsNotEmpty } from 'class-validator';

export class Create<%=Name%>Dto {
  @IsNotEmpty()
  public name!: string;
}
