import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Fare } from 'src/fares/entities/fare.entity';

@Entity('routes')
export class Route {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public code!: string;

  @Column()
  public name!: string;

  @Column()
  public short_name!: string;

  @Column({ type: 'text' })
  public description!: string;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(() => Fare, (fare: Fare) => fare.route)
  public fares!: Fare[];
}
