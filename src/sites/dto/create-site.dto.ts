import { IsNotEmpty } from 'class-validator';

export class CreateSiteDto {
  @IsNotEmpty()
  public name!: string;
}
