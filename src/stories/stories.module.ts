import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from 'src/casl/casl.module';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from 'src/auth/auth.module';
import { StoriesService } from './stories.service';
import { StoriesController } from './stories.controller';
import { Story } from './entities/story.entity';
import { PayService } from 'src/auth/pay.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Story]),
    CaslModule,
    HttpModule,
    AuthModule,
  ],
  controllers: [StoriesController],
  providers: [StoriesService, PayService],
})
export class StoriesModule {}
