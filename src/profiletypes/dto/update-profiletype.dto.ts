import { PartialType } from '@nestjs/swagger';
import { CreateProfiletypeDto } from './create-profiletype.dto';

export class UpdateProfiletypeDto extends PartialType(CreateProfiletypeDto) {}
