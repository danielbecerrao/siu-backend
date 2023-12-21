import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateNewsImageDto {
  @IsNotEmpty()
  public newsId!: number;

  @ApiProperty({ type: 'string', format: 'binary' })
  public file!: string;
}
