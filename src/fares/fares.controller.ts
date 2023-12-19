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
import { CheckPolicies } from '../common/decorators/checkPolicies.decorator';
import type { AppAbility } from '../casl/casl-ability.factory';
import { PoliciesGuard } from '../casl/policies.guard';
import type { Fare } from './entities/fare.entity';
import { FaresService } from './fares.service';
import { PayService } from 'src/auth/pay.service';
import { CreateFareDto } from './dto/create-fare.dto';
import { UpdateFareDto } from './dto/update-fare.dto';
import type { FareInterface } from 'src/fares/interface/fare.interface';

@Controller('fares')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@ApiTags('Tarifas')
@ApiBearerAuth()
export class FaresController {
  public constructor(
    private readonly faresService: FaresService,
    private readonly payService: PayService,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can('Create', 'Fare'))
  public async create(@Body() createFareDto: CreateFareDto): Promise<Fare> {
    return this.faresService.create(createFareDto);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Fare'))
  public async findAll(): Promise<FareInterface> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.accessToken;
      const fares: FareInterface = await this.payService.getAllFares(token);

      return fares;
    } catch (error) {
      throw new Error(`Error when trying to obtain fares data: ${error}`);
    }
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Read', 'Fare'))
  public async findOne(@Param('id') id: string): Promise<FareInterface | null> {
    try {
      const apiResponse = await this.payService.payLogin();
      const token: string = apiResponse.accessToken;
      const fare: FareInterface = await this.payService.getOneFare(+id, token);

      return fare;
    } catch (error) {
      throw new Error(`Error when trying to obtain fares data: ${error}`);
    }
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Update', 'Fare'))
  public async update(
    @Param('id') id: string,
    @Body() updateFareDto: UpdateFareDto,
  ): Promise<Fare> {
    return this.faresService.update(+id, updateFareDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can('Delete', 'Fare'))
  public async remove(@Param('id') id: string): Promise<Fare> {
    return this.faresService.remove(+id);
  }
}
