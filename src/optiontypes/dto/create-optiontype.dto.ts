import { IsNotEmpty } from 'class-validator';

export class CreateOptiontypeDto {
  @IsNotEmpty()
  public name!: string;
}
