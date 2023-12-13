import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { NewsCategoriesController } from './news_categories.controller';
import { NewsCategoriesService } from './news_categories.service';

describe('NewsCategoriesController', () => {
  let controller: NewsCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsCategoriesController],
      providers: [NewsCategoriesService],
    }).compile();

    controller = module.get<NewsCategoriesController>(NewsCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
