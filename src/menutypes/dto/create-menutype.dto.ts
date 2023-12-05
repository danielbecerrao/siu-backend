import { IsNotEmpty } from 'class-validator';

export class CreateMenutypeDto {
  @IsNotEmpty()
  public name!: string;
}
