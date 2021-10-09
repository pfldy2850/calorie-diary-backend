import { Module } from '@nestjs/common';
import { EatHistoriesService } from './eat-histories.service';
import { EatHistoriesResolver } from './eat-histories.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { eatHistoriesProviders } from './eat-histories.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...eatHistoriesProviders,
    EatHistoriesResolver,
    EatHistoriesService,
  ],
})
export class EatHistoriesModule {}
