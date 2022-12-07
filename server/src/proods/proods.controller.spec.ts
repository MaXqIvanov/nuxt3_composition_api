import { Test, TestingModule } from '@nestjs/testing';
import { ProodsController } from './proods.controller';

describe('ProodsController', () => {
  let controller: ProodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProodsController],
    }).compile();

    controller = module.get<ProodsController>(ProodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
