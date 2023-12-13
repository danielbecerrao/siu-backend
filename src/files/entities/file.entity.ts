import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
} from 'typeorm';
import { News } from 'src/news/entities/news.entity';

@Entity('files')
export class File {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public newsId!: number;

  @ManyToOne(() => News, (news: News) => news.files)
  public news!: News;

  @Column()
  public name!: string;

  @Column({ type: 'text' })
  public description!: string;

  @Column()
  public filepath!: string;

  @Column()
  public format!: string;

  @Column()
  public url!: string;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;

  @DeleteDateColumn()
  public deletedAt!: Date | null;
}
