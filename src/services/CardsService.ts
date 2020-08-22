import { injectable, inject } from 'tsyringe'
import { ICardsRepository } from '../repositories/CardsRepository'
import { ICard } from '../models/Card'

export interface ICardsService {
  getRandom(): Promise<ICard>;
}

@injectable()
export default class CardsService implements ICardsService {
  constructor (@inject('ICardsRepository') private cardsRepository: ICardsRepository) {}

  getRandom () {
    return this.cardsRepository.getRandom()
  }
}
