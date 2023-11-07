import { IsNotEmpty } from 'class-validator';

export class CreateSubregionDto {
  @IsNotEmpty()
  public name!: string;
}
