import { IsNotEmpty, IsOptional } from 'class-validator';
import type { Comment } from '../entities/comment.entity';

export class CreateCommentDto {
  @IsNotEmpty()
  public content!: string;

  @IsNotEmpty()
  public userId!: number;

  @IsOptional()
  public newsId?: number | null;

  @IsOptional()
  public parent?: Comment | null;
}
