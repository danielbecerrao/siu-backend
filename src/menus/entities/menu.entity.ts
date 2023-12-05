import { Label } from '../../labels/entities/label.entity';
import { Menutype } from '../../menutypes/entities/menutype.entity';
import { Mpermission } from '../../mpermissions/entities/mpermission.entity';
import { Option } from '../../options/entities/option.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'administrative', name: 'menus' })
@Tree('closure-table')
export class Menu {
  @PrimaryGeneratedColumn()
  public id!: number;

  @TreeChildren()
  public children!: Menu[];

  @TreeParent()
  public parent!: Menu;

  @ManyToOne(() => Label, (label: Label) => label.menus)
  public label!: Label;

  @ManyToOne(() => Menutype, (menutype: Menutype) => menutype.menus)
  public menuType!: Menutype;

  @Column({ nullable: true })
  public route!: string;

  @Column()
  public icon!: string;

  @Column()
  public order!: number;

  @Column()
  public isActive!: boolean;

  @OneToMany(
    () => Mpermission,
    (mpermission: Mpermission) => mpermission.profile,
  )
  public mpermissions!: Mpermission[];

  @OneToMany(() => Option, (option: Option) => option.menu)
  public options!: Option[];

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
