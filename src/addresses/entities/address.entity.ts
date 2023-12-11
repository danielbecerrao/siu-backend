import { User } from 'src/users/entities/user.entity';
import { AddressType } from './types.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(() => User, (user: User) => user.id)
  public users!: User[];

  @OneToMany(() => AddressType, (addressType: AddressType) => addressType.id)
  public addressTypes!: AddressType[];
}
