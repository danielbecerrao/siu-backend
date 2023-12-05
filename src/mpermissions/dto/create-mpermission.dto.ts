import { IsNotEmpty } from 'class-validator';

export class CreateMpermissionDto {
  @IsNotEmpty()
  public profileId!: string;

  @IsNotEmpty()
  public menuId!: string;

  @IsNotEmpty()
  public optionId!: string;
}
