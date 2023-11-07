import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubregionsController } from './subregions.controller';
import { SubregionsService } from './subregions.service';
import { Subregion } from './entities/subregion.entity';
import { CaslModule } from '../casl/casl.module';
import { SubregionLog } from './entities/subregionlog.entity';
import { SubregionSubscriber } from './entities/subregion.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subregion]),
    TypeOrmModule.forFeature([SubregionLog]),
    CaslModule,
  ],
  controllers: [SubregionsController],
  providers: [SubregionsService, SubregionSubscriber],
})
export class SubregionsModule {}
