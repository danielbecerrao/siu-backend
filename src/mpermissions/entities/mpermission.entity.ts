import { Menu } from '../../menus/entities/menu.entity';
import { Option } from '../../options/entities/option.entity';
import { Profile } from '../../profiles/entities/profile.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'administrative', name: 'mpermissions' })
export class Mpermission {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public profileId!: string;

  @ManyToOne(() => Profile, (profile: Profile) => profile.mpermissions)
  public profile!: Profile;

  @Column()
  public menuId!: string;

  @ManyToOne(() => Menu, (menu: Menu) => menu.mpermissions)
  public menu!: Menu;

  @Column()
  public optionId!: string;

  @ManyToOne(() => Option, (option: Option) => option.mpermissions)
  public option!: Option;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
