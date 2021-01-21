export default interface IPaginateMovieDTO {
  rowsPerPage: number;
  currentPage: number;
  q?: string;
}
