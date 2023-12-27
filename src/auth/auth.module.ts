import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PayService } from './pay.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { ConfigService } from '@nestjs/config';
import { RefreshJwtStrategy } from './strategies/refresh-token.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { AuthLog } from './entities/authlog.entity';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthLog]),
    UsersModule,
    HttpModule,
    PassportModule,
    FilesModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('SECRET'),
        signOptions: {
          expiresIn: '36000s',
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PayService,
    LocalStrategy,
    JwtStrategy,
    RefreshJwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
