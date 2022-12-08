import { Test, TestingModule } from '@nestjs/testing';
import { ProodsService } from './proods.service';

describe('ProodsService', () => {
  let service: ProodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProodsService],
    }).compile();

    service = module.get<ProodsService>(ProodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
