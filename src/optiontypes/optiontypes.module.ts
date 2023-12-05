import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptiontypesController } from './optiontypes.controller';
import { OptiontypesService } from './optiontypes.service';
import { OptionType } from './entities/optiontype.entity';
import { CaslModule } from '../casl/casl.module';

@Module({
  imports: [TypeOrmModule.forFeature([OptionType]), CaslModule],
  controllers: [OptiontypesController],
  providers: [OptiontypesService],
})
export class OptiontypesModule {}
