import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { Address } from './entities/address.entity';
import { AddressLog } from './entities/addresslog.entity';
import { AddressSubscriber } from './entities/address.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Address]),
    TypeOrmModule.forFeature([AddressLog]),
    CaslModule,
  ],
  controllers: [AddressController],
  providers: [AddressService, AddressSubscriber],
})
export class AddressModule {}
