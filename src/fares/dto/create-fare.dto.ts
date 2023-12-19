import { IsNotEmpty } from 'class-validator';

export class CreateFareDto {
  @IsNotEmpty()
  public clientId!: number;

  @IsNotEmpty()
  public fareTypeId!: number;

  @IsNotEmpty()
  public fareCategoryId!: number;

  @IsNotEmpty()
  public routeId!: number;

  @IsNotEmpty()
  public name!: string;

  @IsNotEmpty()
  public description!: string;
}
