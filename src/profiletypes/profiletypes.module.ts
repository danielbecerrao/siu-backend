import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfiletypesController } from './profiletypes.controller';
import { ProfiletypesService } from './profiletypes.service';
import { Profiletype } from './entities/profiletype.entity';
import { CaslModule } from '../casl/casl.module';

@Module({
  imports: [TypeOrmModule.forFeature([Profiletype]), CaslModule],
  controllers: [ProfiletypesController],
  providers: [ProfiletypesService],
})
export class ProfiletypesModule {}
