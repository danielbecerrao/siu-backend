import { IsNotEmpty } from 'class-validator';

export class CreateNewsImageDto {
  @IsNotEmpty()
  public newsId!: number;
}
