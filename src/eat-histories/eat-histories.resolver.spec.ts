import { Test, TestingModule } from '@nestjs/testing';
import { EatHistoriesResolver } from './eat-histories.resolver';
import { EatHistoriesService } from './eat-histories.service';

describe('EatHistoriesResolver', () => {
  let resolver: EatHistoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EatHistoriesResolver, EatHistoriesService],
    }).compile();

    resolver = module.get<EatHistoriesResolver>(EatHistoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
