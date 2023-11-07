---
inject: true
to: src/app.module.ts
prepend: true
skip_if: <%=h.inflection.pluralize(h.inflection.capitalize(name.toLowerCase()))%>
---
import { <%=h.inflection.pluralize(h.inflection.capitalize(name.toLowerCase()))%>Module } from './<%=h.inflection.pluralize(name.toLowerCase())%>/<%=h.inflection.pluralize(name.toLowerCase())%>.module';