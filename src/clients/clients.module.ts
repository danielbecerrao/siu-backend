import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Client } from './entities/client.entity';
import { CaslModule } from '../casl/casl.module';
import { ClientLog } from './entities/clientlog.entity';
import { ClientSubscriber } from './entities/client.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client]),
    TypeOrmModule.forFeature([ClientLog]),
    CaslModule,
  ],
  controllers: [ClientsController],
  providers: [ClientsService, ClientSubscriber],
})
export class ClientsModule {}
