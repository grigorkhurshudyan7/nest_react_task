import { Inject, Injectable } from '@nestjs/common';
import { experimentRepositoryToken } from 'src/constants';
import { Repository } from 'typeorm';
import { ExperimentEntity } from './experiment.entity';
import * as Chance from 'chance'

const chance = new Chance()

@Injectable()
export class ExperimentService {
    constructor(
        @Inject(experimentRepositoryToken)
        private readonly experimentRepository:Repository<ExperimentEntity>
    ){}

  public async setExperiment(token:String): Promise<Object> {

    let hasExperiment = await this.experimentRepository.findOne({
        where:{
            token
        }
    })
    if(hasExperiment)
        return hasExperiment


    const experiment:ExperimentEntity = new ExperimentEntity()
    experiment.token = token;
    const lastItem:ExperimentEntity[] = await this.experimentRepository.find({
        order:{
            created: 'DESC'
        },
        take:1
    })
    if(!lastItem.length || (lastItem.length && lastItem[0].button_color == '#0000FF') )
        experiment.button_color = '#FF0000'
    else if(lastItem[0].button_color == '#FF0000')
        experiment.button_color = '#00FF00'
    else
        experiment.button_color = '#0000FF'
    
    experiment.price = await chance.weighted([10, 20, 50, 5], [75, 10, 5, 10])

    
    return await this.experimentRepository.save(experiment)
  }

  public async getExperiments(){
    return await this.experimentRepository.find({
        order:{
            button_color:'ASC'
        }
    })
  }
}
