import { Test, TestingModule } from '@nestjs/testing';
import { EatHistoriesService } from './eat-histories.service';

describe('EatHistoriesService', () => {
  let service: EatHistoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EatHistoriesService],
    }).compile();

    service = module.get<EatHistoriesService>(EatHistoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
