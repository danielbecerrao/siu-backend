import { PartialType } from '@nestjs/swagger';
import { CreateNewsFileDto } from './create-news-file.dto';

export class UpdateNewsFileDto extends PartialType(CreateNewsFileDto) {}
