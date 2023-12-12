import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { AddressService } from './address.service';
import { AddressTypeService } from './addressType.service';
import { AddressController } from './address.controller';
import { Address } from './entities/address.entity';
import { AddressLog } from './entities/addresslog.entity';
import { AddressSubscriber } from './entities/address.subscriber';
import { AddressType } from './entities/types.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Address]),
    TypeOrmModule.forFeature([AddressType]),
    TypeOrmModule.forFeature([AddressLog]),
    CaslModule,
  ],
  controllers: [AddressController],
  providers: [AddressService, AddressTypeService, AddressSubscriber],
})
export class AddressModule {}
