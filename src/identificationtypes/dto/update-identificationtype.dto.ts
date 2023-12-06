import { PartialType } from '@nestjs/swagger';
import { CreateIdentificationtypeDto } from './create-identificationtype.dto';

export class UpdateIdentificationtypeDto extends PartialType(
  CreateIdentificationtypeDto,
) {}
