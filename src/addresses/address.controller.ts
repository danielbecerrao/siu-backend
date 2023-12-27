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
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import type { Paginated } from 'nestjs-paginate';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AddressService } from './address.service';
import { AddressTypeService } from './addressType.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import type { Address } from './entities/address.entity';
import type { AddressType } from '../addresses/entities/types.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('addresses')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Direcciones')
@ApiBearerAuth()
export class AddressController {
  public constructor(
    private readonly addressService: AddressService,
    private readonly addressTypeservice: AddressTypeService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Address'))
  public async create(
    @Body() createAddressDto: CreateAddressDto,
  ): Promise<Address> {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Address'))
  public async findAll(
    @Paginate() query: PaginateQuery,
  ): Promise<Paginated<Address>> {
    return this.addressService.findAll(query);
  }

  @Get('user/:userId')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Address'))
  public async findByUserId(
    @Paginate() query: PaginateQuery,
    @Param('userId') userId: string,
  ): Promise<Paginated<Address>> {
    return this.addressService.findByUserId(+userId, query);
  }

  @Get('types')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Address'))
  public async findTypes(): Promise<AddressType[]> {
    return this.addressTypeservice.findAll();
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Address'))
  public async findOne(@Param('id') id: string): Promise<Address | null> {
    return this.addressService.findOne(+id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Address'))
  public async update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    return this.addressService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Address'))
  public async remove(@Param('id') id: string): Promise<Address> {
    return this.addressService.remove(+id);
  }
}
