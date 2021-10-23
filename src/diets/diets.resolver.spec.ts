import { Test, TestingModule } from '@nestjs/testing';
import { DietsResolver } from './diets.resolver';

describe('FoodsResolver', () => {
  let resolver: DietsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DietsResolver, DietsResolver],
    }).compile();

    resolver = module.get<DietsResolver>(DietsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
