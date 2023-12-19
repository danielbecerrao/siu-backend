import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { Fare } from './entities/fare.entity';
import { FaresService } from './fares.service';
import { PayService } from 'src/auth/pay.service';
import { FaresController } from './fares.controller';
import { FareLog } from './entities/farelog.entity';
import { FareSubscriber } from './entities/fare.subscriber';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fare]),
    TypeOrmModule.forFeature([FareLog]),
    CaslModule,
    HttpModule,
    AuthModule,
  ],
  controllers: [FaresController],
  providers: [FaresService, PayService, FareSubscriber],
})
export class FaresModule {}
