import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { Country } from './entities/country.entity';
import { CaslModule } from '../casl/casl.module';
import { CountryLog } from './entities/countrylog.entity';
import { CountrySubscriber } from './entities/country.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Country]),
    TypeOrmModule.forFeature([CountryLog]),
    CaslModule,
  ],
  controllers: [CountriesController],
  providers: [CountriesService, CountrySubscriber],
})
export class CountriesModule {}
