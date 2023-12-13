import { PartialType } from '@nestjs/swagger';
import { CreateNewsImageDto } from './create-news_image.dto';

export class UpdateNewsImageDto extends PartialType(CreateNewsImageDto) {}
