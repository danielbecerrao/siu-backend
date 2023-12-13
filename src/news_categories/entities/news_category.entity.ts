import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { News } from 'src/news/entities/news.entity';

@Entity('news_categories')
export class NewsCategory {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column({ type: 'text' })
  public description!: string;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(() => News, (news: News) => news.newsCategory)
  public news!: News[];
}
