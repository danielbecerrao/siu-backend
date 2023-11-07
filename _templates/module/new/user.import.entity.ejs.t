---
inject: true
to: src/users/entities/user.entity.ts
prepend: true
---
<%
 name = h.inflection.singularize(name.toLowerCase())
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
 names = h.inflection.pluralize(name.toLowerCase())
 Names = h.inflection.pluralize(h.inflection.capitalize(name.toLowerCase()))
 Nombres = h.inflection.pluralize(h.inflection.capitalize(nombre.toLowerCase()))
%>import { <%=Name%>Log } from 'src/<%=names%>/entities/<%=name%>log.entity';