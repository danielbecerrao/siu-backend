import { IsNotEmpty } from 'class-validator';

export class CreateCountryDto {
  @IsNotEmpty()
  public name!: string;
}
