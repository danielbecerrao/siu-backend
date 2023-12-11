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

@Entity('addresseslog')
export class AddressLog {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column({ type: 'json' })
  public value!: object;

  @Column()
  public type!: number;

  @Column()
  public userId!: string;

  @Index()
  @ManyToOne(() => User, (user: User) => user.addressLogs)
  public user!: User;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date;
}
