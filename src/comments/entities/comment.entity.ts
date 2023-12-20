import { News } from 'src/news/entities/news.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public content!: string;

  @Column()
  public userId!: number;

  @ManyToOne(() => User, (user: User) => user.comments, {
    eager: true,
  })
  public user!: User;

  @Column({
    nullable: true,
  })
  public newsId?: number | null;

  @ManyToOne(() => News, (news: News) => news.comments, {
    eager: true,
  })
  public news?: News | null;

  @TreeParent()
  public parent?: number | null;

  @TreeChildren()
  public children!: Comment[];

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
