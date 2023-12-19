import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateGeozoneDto {
  @IsNotEmpty()
  @IsNumber()
  public clientId!: number;

  @IsNotEmpty()
  @IsNumber()
  public geozoneTypeId!: number;

  @IsNotEmpty()
  @IsNumber()
  public geozoneCategoryId!: number;

  @IsNotEmpty()
  @IsNumber()
  public countryId!: number;

  @IsOptional()
  @IsNumber()
  public stateId?: number;

  @IsOptional()
  @IsNumber()
  public cityId?: number;

  @IsNotEmpty()
  @IsString()
  public code!: string;

  @IsNotEmpty()
  @IsString()
  public name!: string;

  @IsNotEmpty()
  @IsNumber()
  public support_wheelchair!: number;
}
