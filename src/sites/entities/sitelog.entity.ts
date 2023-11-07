import { User } from '../../users/entities/user.entity';
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

@Entity('siteslog')
export class SiteLog {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column({ type: 'json' })
  public value!: object;

  @Column()
  public type!: number;

  @Column()
  public userId!: string;

  @Index()
  @ManyToOne(() => User, (user: User) => user.siteLogs)
  public user!: User;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date;
}
