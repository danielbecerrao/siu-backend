import { IsNotEmpty } from 'class-validator';

export class CreateCityDto {
  @IsNotEmpty()
  public name!: string;
}
