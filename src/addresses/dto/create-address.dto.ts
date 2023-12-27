import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsNumber()
  public userId!: number;

  @IsNotEmpty()
  @IsNumber()
  public addressTypeId!: number;

  @IsNotEmpty()
  @IsString()
  public description!: string;
}
