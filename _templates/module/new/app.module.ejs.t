---
inject: true
to: src/app.module.ts
after: imports
skip_if: <%=h.inflection.pluralize(h.inflection.capitalize(name.toLowerCase()))%>Module,
---
    <%=h.inflection.pluralize(h.inflection.capitalize(name.toLowerCase()))%>Module,