import Lending from '@modules/movies/infra/typeorm/entities/Lending';
import ICreateLendingDTO from '@modules/movies/dtos/ICreateLendingDTO';

export default interface ILendingsRepository {
  create(data: ICreateLendingDTO): Promise<Lending>;
}
