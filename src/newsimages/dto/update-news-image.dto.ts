import { PartialType } from '@nestjs/swagger';
import { CreateNewsImageDto } from './create-news-image.dto';

export class UpdateNewsImageDto extends PartialType(CreateNewsImageDto) {}
