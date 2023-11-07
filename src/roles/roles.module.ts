import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';
import { CaslModule } from '../casl/casl.module';
import { RoleLog } from './entities/rolelog.entity';
import { RoleSubscriber } from './entities/role.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role]),
    TypeOrmModule.forFeature([RoleLog]),
    CaslModule,
  ],
  controllers: [RolesController],
  providers: [RolesService, RoleSubscriber],
})
export class RolesModule {}
