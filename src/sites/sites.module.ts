import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';
import { Site } from './entities/site.entity';
import { CaslModule } from '../casl/casl.module';
import { SiteLog } from './entities/sitelog.entity';
import { SiteSubscriber } from './entities/site.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Site]),
    TypeOrmModule.forFeature([SiteLog]),
    CaslModule,
  ],
  controllers: [SitesController],
  providers: [SitesService, SiteSubscriber],
})
export class SitesModule {}
