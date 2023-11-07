---
to: src/<%=h.inflection.pluralize(name.toLowerCase())%>/entities/<%=h.inflection.singularize(name.toLowerCase())%>.entity.ts
---
<%
 names = h.inflection.pluralize(name.toLowerCase())
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
%>import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('<%=names%>')
export class <%=Name%> {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
