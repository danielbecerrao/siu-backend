import { AddressType } from './types.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public addressTypeId!: number;

  @ManyToOne(
    () => AddressType,
    (addressType: AddressType) => addressType.addresses,
  )
  public addressType!: AddressType;

  @Column()
  public name!: string;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
