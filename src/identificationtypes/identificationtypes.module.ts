import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdentificationtypesController } from './identificationtypes.controller';
import { IdentificationtypesService } from './identificationtypes.service';
import { IdentificationType } from './entities/identificationtype.entity';
import { CaslModule } from '../casl/casl.module';

@Module({
  imports: [TypeOrmModule.forFeature([IdentificationType]), CaslModule],
  controllers: [IdentificationtypesController],
  providers: [IdentificationtypesService],
})
export class IdentificationtypesModule {}
