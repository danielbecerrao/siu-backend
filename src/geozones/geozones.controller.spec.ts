import { Test } from '@nestjs/testing';
import type { TestingModule } from '@nestjs/testing';
import { GeozonesController } from './geozones.controller';
import { GeozonesService } from './geozones.service';

describe('GeozonesController', () => {
  let controller: GeozonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeozonesController],
      providers: [GeozonesService],
    }).compile();

    controller = module.get<GeozonesController>(GeozonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
