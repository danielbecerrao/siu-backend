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
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import type { Address } from './entities/address.entity';
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';

@Controller('addresses')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Direcciones')
@ApiBearerAuth()
export class AddressController {
  public constructor(private readonly addressService: AddressService) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Address'))
  public async create(
    @Body() createAddressDto: CreateAddressDto,
  ): Promise<Address> {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Address'))
  public async findAll(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  // @Get()
  // @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Address'))
  // public async findTypes(): Promise<Address[]> {
  //   return this.addressService.findAll();
  // }

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
