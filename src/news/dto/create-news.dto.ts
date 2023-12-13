import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNewsDto {
  @IsNotEmpty()
  public newsCategoryId!: number;

  @IsNotEmpty()
  public title!: string;

  @IsNotEmpty()
  public description!: string;

  @IsOptional()
  public parent?: number;

  @IsOptional()
  public children!: number;
}
