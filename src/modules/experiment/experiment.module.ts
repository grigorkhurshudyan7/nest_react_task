import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ExperimentController } from './experiment.controller'
import { experimentProviders } from './experiment.provider';
import { ExperimentService } from './experiment.service';

@Module({
  imports: [ DatabaseModule],
  controllers: [ExperimentController],
  providers: [
      ...experimentProviders,
      ExperimentService
    ],
})
export class ExperimentModule {}
