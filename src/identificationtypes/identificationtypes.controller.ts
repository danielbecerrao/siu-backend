import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { IdentificationtypesService } from './identificationtypes.service';
import { CreateIdentificationtypeDto } from './dto/create-identificationtype.dto';
import { UpdateIdentificationtypeDto } from './dto/update-identificationtype.dto';
import type { IdentificationType } from './entities/identificationtype.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('identificationtypes')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Tipos de identificación')
@ApiBearerAuth()
export class IdentificationtypesController {
  public constructor(
    private readonly identificationtypesService: IdentificationtypesService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Create', 'IdentificationType'),
  )
  public async create(
    @Body() createIdentificationtypeDto: CreateIdentificationtypeDto,
  ): Promise<IdentificationType> {
    return this.identificationtypesService.create(createIdentificationtypeDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Read', 'IdentificationType'),
  )
  public async findAll(): Promise<IdentificationType[]> {
    return this.identificationtypesService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Read', 'IdentificationType'),
  )
  public async findOne(
    @Param('id') id: string,
  ): Promise<IdentificationType | null> {
    return this.identificationtypesService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Update', 'IdentificationType'),
  )
  public async update(
    @Param('id') id: string,
    @Body() updateIdentificationtypeDto: UpdateIdentificationtypeDto,
  ): Promise<IdentificationType> {
    return this.identificationtypesService.update(
      +id,
      updateIdentificationtypeDto,
    );
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Delete', 'IdentificationType'),
  )
  public async remove(@Param('id') id: string): Promise<IdentificationType> {
    return this.identificationtypesService.remove(+id);
  }
}