import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm';

@Entity('clients')
@Tree('closure-table')
export class Client {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @TreeParent()
  public parent?: Client | null;

  @TreeChildren()
  public children!: Client[];

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
