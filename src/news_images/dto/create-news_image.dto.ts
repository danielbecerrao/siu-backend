import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNewsImageDto {
  @IsNotEmpty()
  public newsImageTypesId!: number;

  @IsNotEmpty()
  public newsId!: number;

  @IsNotEmpty()
  public name!: string;

  @IsNotEmpty()
  public description!: string;

  @IsOptional()
  public format!: string;

  @IsOptional()
  public filepath!: string;

  @IsOptional()
  public url!: string;

  @IsOptional()
  public image!: string;
}
