import { PartialType } from '@nestjs/swagger';
import { CreatePreferenceToUserDto } from './create-preference-to-user';

export class UpdatePreferenceToUserDto extends PartialType(
  CreatePreferenceToUserDto,
) {}
