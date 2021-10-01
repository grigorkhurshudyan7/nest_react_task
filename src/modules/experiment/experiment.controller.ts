import { Controller, Get, Headers, Post } from '@nestjs/common';
import { ExperimentService } from './experiment.service';

@Controller('experiment')
export class ExperimentController {
  constructor(
      private readonly experimentService:ExperimentService
  ) {}

  @Post('/')
  public async setExperiment(
    @Headers('Device-Token')  Token : String,
  ): Promise<Object> {
    return await this.experimentService.setExperiment(Token)
  }

  @Get('/')
  public async getExperiment(): Promise<Object[]> {
    return await this.experimentService.getExperiments()
  }
}
