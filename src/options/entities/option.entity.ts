import { Label } from '../../labels/entities/label.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { Mpermission } from '../../mpermissions/entities/mpermission.entity';
import { OptionType } from '../../optiontypes/entities/optiontype.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'administrative', name: 'options' })
export class Option {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public labelId!: number;

  @ManyToOne(() => Label, (label: Label) => label.options)
  public label!: Label;

  @Column()
  public menuId!: number;

  @ManyToOne(() => Menu, (menu: Menu) => menu.options)
  public menu!: Menu;

  @Column()
  public optionTypeId!: number;

  @ManyToOne(() => OptionType, (optionType: OptionType) => optionType.options)
  public optionType!: OptionType;

  @Column()
  public component!: string;

  @Column()
  public icon!: string;

  @Column({ nullable: true })
  public route!: string;

  @Column({ nullable: true })
  public event!: string;

  @Column()
  public order!: string;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(
    () => Mpermission,
    (mpermission: Mpermission) => mpermission.option,
  )
  public mpermissions!: Mpermission[];
}
