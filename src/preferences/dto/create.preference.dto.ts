import { IsNotEmpty } from 'class-validator';

export class CreatePreferenceDto {
  @IsNotEmpty()
  public primaryColor!: string;

  @IsNotEmpty()
  public secundaryColor!: string;

  @IsNotEmpty()
  public font!: string;

  @IsNotEmpty()
  public fontType!: string;

  @IsNotEmpty()
  public fontSize!: string;

  @IsNotEmpty()
  public darkMode!: boolean;

  @IsNotEmpty()
  public language!: string;

  @IsNotEmpty()
  public notifications!: boolean;

  @IsNotEmpty()
  public customTheme!: string;
}
