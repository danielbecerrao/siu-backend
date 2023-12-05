import { PartialType } from '@nestjs/swagger';
import { CreateOptiontypeDto } from './create-optiontype.dto';

export class UpdateOptiontypeDto extends PartialType(CreateOptiontypeDto) {}
