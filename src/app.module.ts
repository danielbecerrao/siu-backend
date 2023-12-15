import { NewsFilesModule } from './newsfiles/newsFiles.module';
import { NewsImagesModule } from './newsimages/newsImages.module';
import { NewsCategoriesModule } from './newscategories/newsCategories.module';
import { FilesModule } from './files/files.module';
import { NewsModule } from './news/news.module';
import { IdentificationtypesModule } from './identificationtypes/identificationtypes.module';
import { OptiontypesModule } from './optiontypes/optiontypes.module';
import { OptionsModule } from './options/options.module';
import { ProfiletypesModule } from './profiletypes/profiletypes.module';
import { ProfilesModule } from './profiles/profiles.module';
import { MpermissionsModule } from './mpermissions/mpermissions.module';
import { MenutypesModule } from './menutypes/menutypes.module';
import { LabelsModule } from './labels/labels.module';
import { MenusModule } from './menus/menus.module';
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
import { PreferencesModule } from './preferences/preferences.module';
import { PreferencesToUsersModule } from './preferences-to-users/preferences-to-users.module';
import { AddressModule } from './addresses/address.module';
import { NewsModule } from './news/news.module';
import { NewsCategoriesModule } from './news_categories/news_categories.module';
import { NewsImagesModule } from './news_images/news_images.module';
import { FilesModule } from './files/files.module';
import { CommentsModule } from './comments/comments.module';

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
    PreferencesModule,
    PreferencesToUsersModule,
    AddressModule,
<<<<<<< HEAD
    NewsModule,
    NewsCategoriesModule,
    NewsImagesModule,
    FilesModule,
    CommentsModule,
=======
    NewsFilesModule,
    NewsImagesModule,
    NewsCategoriesModule,
    FilesModule,
    NewsModule,
    IdentificationtypesModule,
    OptiontypesModule,
    OptionsModule,
    ProfiletypesModule,
    ProfilesModule,
    MpermissionsModule,
    MenutypesModule,
    LabelsModule,
    MenusModule,
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
  ],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: UserInterceptor,
    },
  ],
})
export class AppModule {}
