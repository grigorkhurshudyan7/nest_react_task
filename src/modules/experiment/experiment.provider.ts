import { dbConnectionToken, experimentRepositoryToken } from '../../constants';
import { ExperimentEntity } from './experiment.entity';
import { Connection } from 'typeorm';
export const experimentProviders = [
  {
    provide: experimentRepositoryToken,
    inject: [dbConnectionToken],
    useFactory: (connection: Connection) => {
      return connection.getRepository(ExperimentEntity);
    }
  },
];
