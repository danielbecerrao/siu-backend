import { IsNotEmpty } from 'class-validator';

export class CreateRegionDto {
  @IsNotEmpty()
  public name!: string;
}
