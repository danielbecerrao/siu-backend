import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { S3Service } from 'src/aws/s3.service';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { File } from './entities/file.entity';
import { FileLog } from './entities/filelog.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([File]),
    TypeOrmModule.forFeature([FileLog]),
    forwardRef(() => CaslModule),
  ],
  controllers: [FilesController],
  providers: [FilesService, S3Service],
})
export class FilesModule {}
