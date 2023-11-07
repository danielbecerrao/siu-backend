import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { Permission } from './entities/permission.entity';
import { CaslModule } from '../casl/casl.module';
import { PermissionLog } from './entities/permissionlog.entity';
import { PermissionSubscriber } from './entities/permission.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Permission]),
    TypeOrmModule.forFeature([PermissionLog]),
    CaslModule,
  ],
  controllers: [PermissionsController],
  providers: [PermissionsService, PermissionSubscriber],
})
export class PermissionsModule {}
