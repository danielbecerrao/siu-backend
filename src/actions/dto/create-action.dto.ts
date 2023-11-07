import { IsNotEmpty } from 'class-validator';

export class CreateActionDto {
  @IsNotEmpty()
  public name!: string;
}
