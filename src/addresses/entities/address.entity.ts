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
import type { PaginateConfig } from 'nestjs-paginate';
import { FilterOperator } from 'nestjs-paginate';
import { User } from 'src/users/entities/user.entity';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public userId!: number;

  @ManyToOne(() => User, (user: User) => user.addresses)
  public user!: User;

  @Column()
  public addressTypeId!: number;

  @ManyToOne(
    () => AddressType,
    (addressType: AddressType) => addressType.addresses,
  )
  public addressType!: AddressType;

  @Column({ type: 'text' })
  public description!: string;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}

export const config: PaginateConfig<Address> = {
  loadEagerRelations: true,
  sortableColumns: ['id', 'description', 'addressType.name'],
  relations: ['addressType'],
  filterableColumns: {
    'addressType.name': [FilterOperator.IN],
  },
};
