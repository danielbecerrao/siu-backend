import { City } from '../../cities/entities/city.entity';
import { User } from '../../users/entities/user.entity';
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

@Entity('clients')
@Tree('closure-table')
export class Client {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public primaryColor!: string;

  @Column()
  public secondaryColor!: string;

  @Column()
  public imageUrl!: string;

  @Column({
    nullable: true,
  })
  public cityId!: number;

  @ManyToOne(() => City, (city: City) => city.clients)
  public city!: City;

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

  @OneToMany(() => User, (user: User) => user.client)
  public users!: User[];
}
