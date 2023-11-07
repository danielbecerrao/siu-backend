import { PartialType } from '@nestjs/swagger';
import { CreateSubregionDto } from './create-subregion.dto';

export class UpdateSubregionDto extends PartialType(CreateSubregionDto) {}
