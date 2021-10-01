import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, CreateDateColumn,} from 'typeorm';
import { experimentEntityName } from '../../constants';

@Entity(experimentEntityName)
export class ExperimentEntity {


  @PrimaryGeneratedColumn('uuid')
  public id: String;

  @Column({ type: 'varchar' })
  public token: String;

  @Column({ type: 'varchar',enum: ["#FF0000", "#00FF00","#0000FF"] })
  public button_color: String;

  @Column({ type: 'varchar' })
  public price: Number;

  @CreateDateColumn()
  public created: Date

}