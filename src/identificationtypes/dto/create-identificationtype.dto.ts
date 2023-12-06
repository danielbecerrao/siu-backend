import { IsNotEmpty } from 'class-validator';

export class CreateIdentificationtypeDto {
  @IsNotEmpty()
  public name!: string;
}
