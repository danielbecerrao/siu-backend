import { Comment } from '../../comments/entities/comment.entity';
import { NewsCategory } from '../../newscategories/entities/newsCategory.entity';
import { NewsFile } from '../../newsfiles/entities/newsFile.entity';
import { NewsImage } from '../../newsimages/entities/newsImage.entity';
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

@Entity('news')
@Tree('closure-table')
export class News {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public title!: string;

  @Column()
  public description!: string;

  @Column({ default: '' })
  public shortDescription!: string;

  @Column()
  public publicationDate!: Date;

  @Column()
  public newsCategoryId!: number;

  @ManyToOne(
    () => NewsCategory,
    (newsCategory: NewsCategory) => newsCategory.news,
    {
      eager: true,
    },
  )
  public newsCategory!: NewsCategory;

  @TreeParent()
  public parent?: News | null;

  @TreeChildren()
  public children!: News[];

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;

  @OneToMany(() => NewsFile, (newsfile: NewsFile) => newsfile.news, {
    eager: true,
  })
  public newsFiles!: NewsFile[];

  @OneToMany(() => NewsImage, (newsImage: NewsImage) => newsImage.news, {
    eager: true,
  })
  public newsImages!: NewsImage[];

  @OneToMany(() => Comment, (comment: Comment) => comment.news)
  public comments!: Comment[];
}
