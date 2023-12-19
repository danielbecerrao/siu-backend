import { PartialType } from '@nestjs/swagger';
import { CreateGeozoneDto } from './create-geozone.dto';

export class UpdateGeozoneDto extends PartialType(CreateGeozoneDto) {}
