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
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import type { Client } from './entities/client.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('clients')
@ApiTags('Clientes')
export class ClientsController {
  public constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Client'))
  public async create(
    @Body() createClientDto: CreateClientDto,
  ): Promise<Client> {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  public async findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Client'))
  public async findOne(@Param('id') id: string): Promise<Client | null> {
    return this.clientsService.findOneParent(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Client'))
  public async update(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @ApiBearerAuth()
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Client'))
  public async remove(@Param('id') id: string): Promise<Client> {
    return this.clientsService.remove(+id);
  }
}
