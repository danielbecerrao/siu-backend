import { IsNotEmpty } from 'class-validator';

export class CreateLabelDto {
  @IsNotEmpty()
  public label!: string;

  @IsNotEmpty()
  public language!: string;
}
