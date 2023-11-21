import { IsNotEmpty } from 'class-validator';

export class CreatePreferenceToUserDto {
  @IsNotEmpty()
  public userId!: number;

  @IsNotEmpty()
  public preferenceId!: number;
}
