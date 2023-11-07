import { Action } from '../../actions/entities/action.entity';
import { Role } from '../../roles/entities/role.entity';
import { Subject } from '../../subjects/entities/subject.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public roleId!: number;

  @ManyToOne(() => Role, (role: Role) => role.permissions)
  public role!: Role;

  @Column()
  public subjectId!: number;

  @ManyToOne(() => Subject, (subject: Subject) => subject.permissions)
  public subject!: Subject;

  @Column()
  public actionId!: number;

  @ManyToOne(() => Action, (action: Action) => action.permissions)
  public action!: Action;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
