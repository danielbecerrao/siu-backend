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
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import type { Subject } from './entities/subject.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('subjects')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Temas')
@ApiBearerAuth()
export class SubjectsController {
  public constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Subject'))
  public async create(
    @Body() createSubjectDto: CreateSubjectDto,
  ): Promise<Subject> {
    return this.subjectsService.create(createSubjectDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Subject'))
  public async findAll(): Promise<Subject[]> {
    return this.subjectsService.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Subject'))
  public async findOne(@Param('id') id: string): Promise<Subject | null> {
    return this.subjectsService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Subject'))
  public async update(
    @Param('id') id: string,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    return this.subjectsService.update(+id, updateSubjectDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Subject'))
  public async remove(@Param('id') id: string): Promise<Subject> {
    return this.subjectsService.remove(+id);
  }
}
