import { IsNotEmpty } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  public labelId!: number;

  @IsNotEmpty()
  public menuId!: number;

  @IsNotEmpty()
  public optionTypeId!: number;

  @IsNotEmpty()
  public component!: string;

  @IsNotEmpty()
  public icon!: string;

  @IsNotEmpty()
  public route!: string;

  @IsNotEmpty()
  public event!: string;

  @IsNotEmpty()
  public order!: string;
}
