import { IsNotEmpty } from 'class-validator';

export class CreateSubjectDto {
  @IsNotEmpty()
  public name!: string;
}
