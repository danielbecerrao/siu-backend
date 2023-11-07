import { IsNotEmpty } from 'class-validator';

export class CreatePermissionDto {
  @IsNotEmpty()
  public roleId!: number;

  @IsNotEmpty()
  public subjectId!: number;

  @IsNotEmpty()
  public actionId!: number;
}
