import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEatHistoryInput } from './dto/create-eat-history.input';
import { UpdateEatHistoryInput } from './dto/update-eat-history.input';
import { EatHistory } from './entities/eat-history.entity';

@Injectable()
export class EatHistoriesService {
  constructor(
    @Inject('EATHISTORY_REPOSITORY')
    private eatHistoryRepository: Repository<EatHistory>,
  ) {}
  create(createEatHistoryInput: CreateEatHistoryInput) {
    return 'This action adds a new eatHistory';
  }

  findAll() {
    return `This action returns all eatHistories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eatHistory`;
  }

  update(id: number, updateEatHistoryInput: UpdateEatHistoryInput) {
    return `This action updates a #${id} eatHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} eatHistory`;
  }
}
