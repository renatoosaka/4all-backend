import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Copy from '@modules/movies/infra/typeorm/entities/Copy';

@Entity('movies')
class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column()
  description: string;

  @Column()
  active: boolean;

  @OneToMany(() => Copy, copy => copy.movie, { cascade: true })
  @JoinColumn({ name: 'movie_id' })
  copies: Copy[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Movie;
