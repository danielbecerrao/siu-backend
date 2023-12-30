import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
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
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('identificationtypes')
@ApiTags('Tipos de identificación')
export class IdentificationtypesController {
  public constructor(
    private readonly identificationtypesService: IdentificationtypesService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Create', 'IdentificationType'),
  )
  public async create(
    @Body() createIdentificationtypeDto: CreateIdentificationtypeDto,
  ): Promise<IdentificationType> {
    return this.identificationtypesService.create(createIdentificationtypeDto);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  public async findAll(): Promise<IdentificationType[]> {
    return this.identificationtypesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Read', 'IdentificationType'),
  )
  public async findOne(
    @Param('id') id: string,
  ): Promise<IdentificationType | null> {
    return this.identificationtypesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
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
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @CheckPolicies((ability: AppAbility) =>
    ability.can('Delete', 'IdentificationType'),
  )
  public async remove(@Param('id') id: string): Promise<IdentificationType> {
    return this.identificationtypesService.remove(+id);
  }
}
