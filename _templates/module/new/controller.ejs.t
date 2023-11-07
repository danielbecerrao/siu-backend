---
to: src/<%=h.inflection.pluralize(name.toLowerCase())%>/<%=h.inflection.pluralize(name.toLowerCase())%>.controller.ts
---
<%
 name = h.inflection.singularize(name.toLowerCase())
 Name = h.inflection.singularize(h.inflection.capitalize(name.toLowerCase()))
 names = h.inflection.pluralize(name.toLowerCase())
 Names = h.inflection.pluralize(h.inflection.capitalize(name.toLowerCase()))
 Nombres = h.inflection.pluralize(h.inflection.capitalize(nombre.toLowerCase()))
%>import {
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
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { <%=Names%>Service } from './<%=names%>.service';
import { Create<%=Name%>Dto } from './dto/create-<%=name%>.dto';
import { Update<%=Name%>Dto } from './dto/update-<%=name%>.dto';
import type { <%=Name%> } from './entities/<%=name%>.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('<%=names%>')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('<%=Nombres%>')
@ApiBearerAuth()
export class <%=Names%>Controller {
  public constructor(private readonly <%=names%>Service: <%=Names%>Service) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', '<%=Name%>'))
  public async create(
    @Body() create<%=Name%>Dto: Create<%=Name%>Dto,
  ): Promise<<%=Name%>> {
    return this.<%=names%>Service.create(create<%=Name%>Dto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', '<%=Name%>'))
  public async findAll(): Promise<<%=Name%>[]> {
    return this.<%=names%>Service.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', '<%=Name%>'))
  public async findOne(@Param('id') id: string): Promise<<%=Name%> | null> {
    return this.<%=names%>Service.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', '<%=Name%>'))
  public async update(
    @Param('id') id: string,
    @Body() update<%=Name%>Dto: Update<%=Name%>Dto,
  ): Promise<<%=Name%>> {
    return this.<%=names%>Service.update(+id, update<%=Name%>Dto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', '<%=Name%>'))
  public async remove(@Param('id') id: string): Promise<<%=Name%>> {
    return this.<%=names%>Service.remove(+id);
  }
}
