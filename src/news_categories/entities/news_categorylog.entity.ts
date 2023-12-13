import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('news_categories_log')
export class NewsCategoriesLog {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column({ type: 'json' })
  public value!: object;

  @Column()
  public type!: number;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date;
}
