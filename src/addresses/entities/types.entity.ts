import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('address_types')
export class AddressType {
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
}
