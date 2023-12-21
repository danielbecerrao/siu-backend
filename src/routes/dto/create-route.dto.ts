import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRouteDto {
  @IsNotEmpty()
  @IsString()
  public code!: string;

  @IsNotEmpty()
  @IsString()
  public name!: string;

  @IsNotEmpty()
  @IsString()
  public short_name!: string;

  @IsNotEmpty()
  @IsString()
  public description!: string;
}
