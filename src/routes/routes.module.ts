import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { Route } from './entities/route.entity';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from 'src/auth/auth.module';
import { ClientsModule } from 'src/clients/clients.module';
import { UsersModule } from 'src/users/users.module';
import { PayService } from 'src/auth/pay.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Route]),
    CaslModule,
    HttpModule,
    AuthModule,
    ClientsModule,
    UsersModule,
  ],
  controllers: [RoutesController],
  providers: [RoutesService, PayService],
})
export class RoutesModule {}
