import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Lending from '@modules/movies/infra/typeorm/entities/Lending';

@Entity('items')
class Item {
  @PrimaryColumn()
  lending_id: string;

  @PrimaryColumn()
  copy_id: string;

  @ManyToOne(() => Lending)
  @JoinColumn({ name: 'lending_id' })
  lending: Lending;
}

export default Item;
