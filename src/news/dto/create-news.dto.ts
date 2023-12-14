import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNewsDto {
  @IsNotEmpty()
  public title!: string;

  @IsNotEmpty()
  public description!: string;

  @IsNotEmpty()
  public publicationDate!: Date;

  @IsOptional()
  public parent?: number;

  @IsNotEmpty()
  public newsCategoryId!: number;
}
