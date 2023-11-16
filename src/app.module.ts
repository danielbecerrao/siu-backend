import { ClientsModule } from './clients/clients.module';
import { SitesModule } from './sites/sites.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ActionsModule } from './actions/actions.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CitiesModule } from './cities/cities.module';
import typeorm from './config/typeorm';
import { CountriesModule } from './countries/countries.module';
import { RegionsModule } from './regions/regions.module';
import { SubregionsModule } from './subregions/subregions.module';
import { UsersModule } from './users/users.module';
import { CaslModule } from './casl/casl.module';
import { ClsModule } from 'nestjs-cls';
import { UserInterceptor } from './users/user.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        configService.getOrThrow('typeorm'),
      inject: [ConfigService],
    }),
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
    }),
    AuthModule,
    CitiesModule,
    ClientsModule,
    CountriesModule,
    RegionsModule,
    SubregionsModule,
    UsersModule,
    CaslModule,
    SubjectsModule,
    ActionsModule,
    PermissionsModule,
    RolesModule,
    SitesModule,
  ],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: UserInterceptor,
    },
  ],
})
export class AppModule {}
