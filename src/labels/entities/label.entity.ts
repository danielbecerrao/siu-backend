import { Menu } from '../../menus/entities/menu.entity';
import { Option } from '../../options/entities/option.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'administrative', name: 'labels' })
export class Label {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public label!: string;

  @Column()
  public language!: string;

  @OneToMany(() => Menu, (menu: Menu) => menu.label)
  public menus!: Menu[];

  @OneToMany(() => Option, (option: Option) => option.label)
  public options!: Option[];

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
