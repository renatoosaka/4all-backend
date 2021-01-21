import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Item from '@modules/movies/infra/typeorm/entities/Item';

@Entity('lendings')
class Lending {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customer_id: string;

  @Column()
  return_date: string;

  @Column()
  is_back: boolean;

  @OneToMany(() => Item, item => item.lending)
  @JoinColumn({ name: 'lending_id' })
  items: Item[];

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default Lending;
