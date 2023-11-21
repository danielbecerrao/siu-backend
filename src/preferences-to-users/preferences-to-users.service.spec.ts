import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { PreferencesToUsersService } from './preferences-to-users.service';

describe('PreferencesToUsersService', () => {
  let service: PreferencesToUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreferencesToUsersService],
    }).compile();

    service = module.get<PreferencesToUsersService>(PreferencesToUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
