---
inject: true
to: src/users/entities/user.entity.ts
at_line: 52
---
<%
 name = h.inflection.singularize(name.toLowerCase())
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
%>  @OneToMany(() => <%=Name%>Log, (<%=name%>Log: <%=Name%>Log) => <%=name%>Log.user)
  public <%=name%>Logs!: <%=Name%>Log[];
