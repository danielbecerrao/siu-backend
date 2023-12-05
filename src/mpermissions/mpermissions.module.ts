import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MpermissionsController } from './mpermissions.controller';
import { MpermissionsService } from './mpermissions.service';
import { Mpermission } from './entities/mpermission.entity';
import { CaslModule } from '../casl/casl.module';

@Module({
  imports: [TypeOrmModule.forFeature([Mpermission]), CaslModule],
  controllers: [MpermissionsController],
  providers: [MpermissionsService],
})
export class MpermissionsModule {}
