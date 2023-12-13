import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('newsimageslog')
export class NewsImagesLog {
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
