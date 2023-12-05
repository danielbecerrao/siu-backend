import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionsController } from './options.controller';
import { OptionsService } from './options.service';
import { Option } from './entities/option.entity';
import { CaslModule } from '../casl/casl.module';

@Module({
  imports: [TypeOrmModule.forFeature([Option]), CaslModule],
  controllers: [OptionsController],
  providers: [OptionsService],
})
export class OptionsModule {}
