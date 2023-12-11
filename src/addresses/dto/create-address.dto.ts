import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  public userId!: number;

  @IsNotEmpty()
  public typeId!: number;

  @IsNotEmpty()
  public name!: string;
}
