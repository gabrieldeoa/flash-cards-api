import { injectable, inject } from 'tsyringe'
import { IDecksRepository } from '../repositories/DecksRepository'
import { IDeck } from '../models/Deck'
import { ICard } from '../models/Card'

export interface IDecksService {
  getRandom(): Promise<IDeck>;
  getRandomCard(deckId: number): ICard;
}

@injectable()
export default class DecksService implements IDecksService {
  constructor (@inject('IDecksRepository') private decksRepository: IDecksRepository) {}

  getRandom () {
    return this.decksRepository.getRandom()
  }

  getRandomCard (deckId: number) {
    return this.decksRepository.getRandomCard(deckId)
  }
}
