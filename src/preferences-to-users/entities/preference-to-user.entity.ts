import {
  Entity,
  ManyToOne,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Preference } from 'src/preferences/entities/preference.entity';

@Entity()
export class PreferenceToUser {
  @PrimaryColumn()
  public id!: number;

  @Column()
  public userId!: number;

  @ManyToOne(() => User, (user: User) => user.id)
  public user!: User;

  @Column()
  public preferenceId!: number;

  @ManyToOne(() => Preference, (preference: Preference) => preference.id)
  public preference!: Preference;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
