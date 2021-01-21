import { getRepository, Like, Repository } from 'typeorm';

import IMoviesRepository from '@modules/movies/repositories/IMoviesRepository';
import Movie from '@modules/movies/infra/typeorm/entities/Movie';
import IPaginateMovieDTO from '@modules/movies/dtos/IPaginateMovieDTO';

class MoviesRepository implements IMoviesRepository {
  private db: Repository<Movie>;

  constructor() {
    this.db = getRepository(Movie);
  }

  public async paginate({
    currentPage,
    rowsPerPage,
    q,
  }: IPaginateMovieDTO): Promise<[Movie[], number]> {
    if (q) {
      return this.db.findAndCount({
        skip: (currentPage - 1) * rowsPerPage,
        take: rowsPerPage,
        where: {
          active: true,
          title: Like(`%${q}%`),
        },
        relations: ['copies'],
        order: { title: 'ASC' },
      });
    }

    return this.db.findAndCount({
      skip: (currentPage - 1) * rowsPerPage,
      take: rowsPerPage,
      where: {
        active: true,
      },
      relations: ['copies'],
      order: { title: 'ASC' },
    });
  }
}

export default MoviesRepository;
