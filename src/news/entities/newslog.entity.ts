<<<<<<< HEAD
=======
import { User } from '../../users/entities/user.entity';
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
<<<<<<< HEAD
=======
  Index,
  ManyToOne,
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('newslog')
export class NewsLog {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column({ type: 'json' })
  public value!: object;

  @Column()
  public type!: number;

<<<<<<< HEAD
=======
  @Column()
  public userId!: string;

  @Index()
  @ManyToOne(() => User, (user: User) => user.newsLogs)
  public user!: User;

>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date;
}
