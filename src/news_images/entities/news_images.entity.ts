import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
import { News } from 'src/news/entities/news.entity';
import { NewsImageType } from './types.entity';

@Entity('news_images')
export class NewsImage {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public newsImageTypesId!: number;

  @ManyToOne(
    () => NewsImageType,
    (newsImageType: NewsImageType) => newsImageType.newsImages,
  )
  public newsImageTypes!: NewsImageType;

  @Column()
  public newsId!: number;

  @ManyToOne(() => News, (news: News) => news.newsImages)
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
