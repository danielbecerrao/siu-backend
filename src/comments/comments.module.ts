import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { CaslModule } from '../casl/casl.module';
import { CommentLog } from './entities/commentlog.entity';
import { CommentSubscriber } from './entities/comment.subscriber';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    TypeOrmModule.forFeature([CommentLog]),
    CaslModule,
    FilesModule,
  ],
  controllers: [CommentsController],
  providers: [CommentsService, CommentSubscriber],
})
export class CommentsModule {}
