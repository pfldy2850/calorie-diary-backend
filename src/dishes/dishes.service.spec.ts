import { Test, TestingModule } from '@nestjs/testing';
import { DishesService } from './dishes.service';

describe('DishesService', () => {
  let service: DishesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DishesService],
    }).compile();

    service = module.get<DishesService>(DishesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
