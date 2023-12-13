import {
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  TreeParent,
  TreeChildren,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
import { NewsCategory } from 'src/news_categories/entities/news_category.entity';
import { NewsImage } from 'src/news_images/entities/news_images.entity';
import { File } from 'src/files/entities/file.entity';
import type { PaginateConfig } from 'nestjs-paginate';
import { FilterOperator } from 'nestjs-paginate';

@Entity('news')
export class News {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public newsCategoryId!: number;

  @ManyToOne(
    () => NewsCategory,
    (newsCategory: NewsCategory) => newsCategory.news,
  )
  public newsCategory!: NewsCategory;

  @Column()
  public title!: string;

  @Column({ type: 'text' })
  public description!: string;

  @TreeParent()
  public parent?: News | null;

  @TreeChildren()
  public children!: News[];

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(() => NewsImage, (newsImage: NewsImage) => newsImage.news)
  public newsImages!: NewsImage[];

  @OneToMany(() => File, (file: File) => file.news)
  public files!: NewsImage[];
}

export const config: PaginateConfig<News> = {
  loadEagerRelations: true,
  sortableColumns: ['id', 'title', 'description', 'newsCategory.name'],
  relations: ['newsCategory'],
  filterableColumns: {
    'newsCategory.name': [FilterOperator.IN],
  },
};
