import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  public addressTypeId!: number;

  @IsNotEmpty()
  public name!: string;
}
