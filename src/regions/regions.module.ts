import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { Region } from './entities/region.entity';
import { CaslModule } from '../casl/casl.module';
import { RegionLog } from './entities/regionlog.entity';
import { RegionSubscriber } from './entities/region.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Region]),
    TypeOrmModule.forFeature([RegionLog]),
    CaslModule,
  ],
  controllers: [RegionsController],
  providers: [RegionsService, RegionSubscriber],
})
export class RegionsModule {}
