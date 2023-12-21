import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
@Entity()
export class Story {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public clientId!: number;

  @Column()
  public storyCategoryId!: number;

  @Column()
  public personProfileId!: number;

  @Column()
  public name!: string;

  @Column()
  public startDateTime!: Date;

  @Column()
  public endDateTime!: Date;

  @Column()
  public viewCounter!: number;

  @Column()
  public likeCounter!: number;

  @Column()
  public actionCounter!: number;

  @Column()
  public isActive!: number;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
