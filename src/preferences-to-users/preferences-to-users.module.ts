import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { PreferenceToUser } from './entities/preference-to-user.entity';
import { PreferenceToUserLog } from './entities/preference-to-userLog.entity';
import { PreferenceToUserSubscriber } from './entities/preference-to-user.subscriber';
import { PreferencesToUsersService } from './preferences-to-users.service';
import { PreferencesToUsersController } from './preferences-to-users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PreferenceToUser]),
    TypeOrmModule.forFeature([PreferenceToUserLog]),
    forwardRef(() => CaslModule),
  ],
  controllers: [PreferencesToUsersController],
  providers: [PreferencesToUsersService, PreferenceToUserSubscriber],
  exports: [PreferencesToUsersService],
})
export class PreferencesToUsersModule {}
