import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionsController } from './actions.controller';
import { ActionsService } from './actions.service';
import { Action } from './entities/action.entity';
import { CaslModule } from '../casl/casl.module';
import { ActionLog } from './entities/actionlog.entity';
import { ActionSubscriber } from './entities/action.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Action]),
    TypeOrmModule.forFeature([ActionLog]),
    CaslModule,
  ],
  controllers: [ActionsController],
  providers: [ActionsService, ActionSubscriber],
  exports: [ActionsService],
})
export class ActionsModule {}
