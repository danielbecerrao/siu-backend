import { Mpermission } from '../../mpermissions/entities/mpermission.entity';
import { Profiletype } from '../../profiletypes/entities/profiletype.entity';
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

@Entity({ schema: 'administrative', name: 'profiles' })
export class Profile {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public description!: string;

  @ManyToOne(
    () => Profiletype,
    (profiletype: Profiletype) => profiletype.profiles,
  )
  public profiletype!: Profiletype;

  @OneToMany(
    () => Mpermission,
    (mpermission: Mpermission) => mpermission.profile,
  )
  public mpermissions!: Mpermission[];

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
