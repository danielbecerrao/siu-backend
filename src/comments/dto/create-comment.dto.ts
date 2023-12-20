import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateCommentDto {
  @IsNotEmpty()
  public content!: string;

  @IsOptional()
  public newsId?: number | null;

  @IsOptional()
  public parent?: number;
}
