import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenutypesController } from './menutypes.controller';
import { MenutypesService } from './menutypes.service';
import { Menutype } from './entities/menutype.entity';
import { CaslModule } from '../casl/casl.module';

@Module({
  imports: [TypeOrmModule.forFeature([Menutype]), CaslModule],
  controllers: [MenutypesController],
  providers: [MenutypesService],
})
export class MenutypesModule {}
