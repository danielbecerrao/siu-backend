<<<<<<< HEAD
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
=======
import { Module } from '@nestjs/common';
import { FilesService } from './files.service';

@Module({
  providers: [FilesService],
  exports: [FilesService],
>>>>>>> 8b91221a13e0165eaacbcb5ab5ed12bbfa29bfee
})
export class FilesModule {}
