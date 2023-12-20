import { IsNotEmpty } from 'class-validator';

export class CreateNewsFileDto {
  @IsNotEmpty()
  public newsId!: number;
}
