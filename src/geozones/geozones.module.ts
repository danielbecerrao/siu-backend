import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from 'src/auth/auth.module';
import { PayService } from 'src/auth/pay.service';
import { Geozone } from './entities/geozone.entity';
import { GeozonesService } from './geozones.service';
import { GeozonesController } from './geozones.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Geozone]),
    CaslModule,
    HttpModule,
    AuthModule,
  ],
  controllers: [GeozonesController],
  providers: [GeozonesService, PayService],
})
export class GeozonesModule {}
