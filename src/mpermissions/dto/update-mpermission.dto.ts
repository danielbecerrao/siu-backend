import { PartialType } from '@nestjs/swagger';
import { CreateMpermissionDto } from './create-mpermission.dto';

export class UpdateMpermissionDto extends PartialType(CreateMpermissionDto) {}
