---
to: src/<%=h.inflection.pluralize(name.toLowerCase())%>/entities/<%=h.inflection.singularize(name.toLowerCase())%>log.entity.ts
---
<%
 name = h.inflection.singularize(name.toLowerCase())
 names = h.inflection.pluralize(name.toLowerCase())
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
%>import { User } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('<%=names%>log')
export class <%=Name%>Log {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column({ type: 'json' })
  public value!: object;

  @Column()
  public type!: number;

  @Column()
  public userId!: string;

  @Index()
  @ManyToOne(() => User, (user: User) => user.<%=name%>Logs)
  public user!: User;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date;
}
