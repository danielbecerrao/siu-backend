import { IsNotEmpty } from 'class-validator';

export class CreateNewsfileDto {
  @IsNotEmpty()
  public name!: string;
}
