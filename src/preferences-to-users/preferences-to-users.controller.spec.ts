import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { PreferencesToUsersController } from './preferences-to-users.controller';

describe('PreferencesToUsersController', () => {
  let controller: PreferencesToUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreferencesToUsersController],
    }).compile();

    controller = module.get<PreferencesToUsersController>(
      PreferencesToUsersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
