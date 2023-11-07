import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { City } from './entities/city.entity';
import { CaslModule } from '../casl/casl.module';
import { CityLog } from './entities/citylog.entity';
import { CitySubscriber } from './entities/city.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([City]),
    TypeOrmModule.forFeature([CityLog]),
    CaslModule,
  ],
  controllers: [CitiesController],
  providers: [CitiesService, CitySubscriber],
})
export class CitiesModule {}
