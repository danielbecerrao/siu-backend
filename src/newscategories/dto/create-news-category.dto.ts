import { IsNotEmpty } from 'class-validator';

export class CreateNewsCategoryDto {
  @IsNotEmpty()
  public name!: string;
}
