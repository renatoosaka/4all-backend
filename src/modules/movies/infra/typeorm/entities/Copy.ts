import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Movie from '@modules/movies/infra/typeorm/entities/Movie';

@Entity('copies')
class Copy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  movie_id: string;

  @Column()
  type: string;

  @Column()
  active: string;

  @ManyToOne(() => Movie, movie => movie.copies)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default Copy;
