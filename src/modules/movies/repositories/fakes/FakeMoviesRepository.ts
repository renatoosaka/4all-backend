import IPaginateMovieDTO from '@modules/movies/dtos/IPaginateMovieDTO';
import Copy from '@modules/movies/infra/typeorm/entities/Copy';
import Movie from '@modules/movies/infra/typeorm/entities/Movie';
import IMoviesRepository from '@modules/movies/repositories/IMoviesRepository';
import { v4 } from 'uuid';

class FakeMoviesRepository implements IMoviesRepository {
  private movies: Movie[] = [];

  constructor() {
    Array.from({ length: 10 }, (_, index) => index).forEach(index => {
      const copies: Copy[] = [];
      const movie = new Movie();
      const id = v4();

      movie.id = id;
      movie.title = `movie ${index}`;
      movie.director = `director movie ${index}`;
      movie.active = true;

      const copy = new Copy();
      copy.id = v4();
      copy.movie_id = id;
      copy.type = 'VHS';
      copies.push(copy);

      movie.copies = copies;

      this.movies.push(movie);
    });
  }

  public async paginate(data: IPaginateMovieDTO): Promise<[Movie[], number]> {
    const movies = this.movies.slice(
      (data.currentPage - 1) * data.rowsPerPage,
      data.currentPage * data.rowsPerPage,
    );

    return [movies, this.movies.length];
  }

  public async findByCopyId(copy_id: string): Promise<Movie | undefined> {
    let foundMovie;

    this.movies.forEach(movie => {
      const index = movie.copies.findIndex(copy => copy.id === copy_id);

      if (index > -1) {
        foundMovie = movie;
      }
    });

    return foundMovie;
  }
}

export default FakeMoviesRepository;
