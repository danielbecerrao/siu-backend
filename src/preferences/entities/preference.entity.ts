import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('preferences')
export class Preference {
  @PrimaryColumn()
  public id!: number;

  @Column()
  public primaryColor!: string;

  @Column()
  public secundaryColor!: string;

  @Column()
  public font!: string;

  @Column()
  public fontType!: string;

  @Column()
  public fontSize!: string;

  @Column()
  public darkMode!: boolean;

  @Column()
  public language!: string;

  @Column()
  public notifications!: boolean;

  @Column()
  public customTheme!: string;

  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @DeleteDateColumn()
  private readonly deletedAt!: Date | null;
}
