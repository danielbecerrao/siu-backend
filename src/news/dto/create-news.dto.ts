import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNewsDto {
  @IsNotEmpty()
<<<<<<< HEAD
  public newsCategoryId!: number;

  @IsNotEmpty()
=======
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
  public title!: string;

  @IsNotEmpty()
  public description!: string;

<<<<<<< HEAD
  @IsOptional()
  public parent?: number;

  @IsOptional()
  public children!: number;
=======
  @IsNotEmpty()
  public publicationDate!: Date;

  @IsOptional()
  public parent?: number;

  @IsNotEmpty()
  public newsCategoryId!: number;
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
}
