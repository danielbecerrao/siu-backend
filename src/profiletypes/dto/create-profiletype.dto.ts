import { IsNotEmpty } from 'class-validator';

export class CreateProfiletypeDto {
  @IsNotEmpty()
  public name!: string;
}
