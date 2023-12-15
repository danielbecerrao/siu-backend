import { PartialType } from '@nestjs/swagger';
import { CreateNewsfileDto } from './create-news-file.dto';

export class UpdateNewsfileDto extends PartialType(CreateNewsfileDto) {}
