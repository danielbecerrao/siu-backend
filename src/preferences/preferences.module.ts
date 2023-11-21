import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { Preference } from './entities/preference.entity';
import { PreferencesController } from './preferences.controller';
import { PreferenceLog } from './entities/preferencelog.entity';
import { PreferenceSubscriber } from './entities/preference.subscriber';
import { PreferencesService } from './preferences.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Preference]),
    TypeOrmModule.forFeature([PreferenceLog]),
    forwardRef(() => CaslModule),
  ],
  controllers: [PreferencesController],
  providers: [PreferencesService, PreferenceSubscriber],
  exports: [PreferencesService],
})
export class PreferencesModule {}
