import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectsController } from './subjects.controller';
import { SubjectsService } from './subjects.service';
import { Subject } from './entities/subject.entity';
import { CaslModule } from '../casl/casl.module';
import { SubjectLog } from './entities/subjectlog.entity';
import { SubjectSubscriber } from './entities/subject.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subject]),
    TypeOrmModule.forFeature([SubjectLog]),
    CaslModule,
  ],
  controllers: [SubjectsController],
  providers: [SubjectsService, SubjectSubscriber],
  exports: [SubjectsService],
})
export class SubjectsModule {}
