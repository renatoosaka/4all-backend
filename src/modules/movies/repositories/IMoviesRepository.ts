import Movie from '@modules/movies/infra/typeorm/entities/Movie';
import IPaginateMovieDTO from '@modules/movies/dtos/IPaginateMovieDTO';

export default interface IMoviesRepository {
  paginate(data: IPaginateMovieDTO): Promise<[Movie[], number]>;
}
