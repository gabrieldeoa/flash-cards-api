import { injectable, inject, singleton } from 'tsyringe'
import { shuffle } from 'lodash'

import { ICard } from '../models/Card'
import { IDecksRepository } from './DecksRepository'
import { GetRandomNumber } from '../utils/GetRandomNumber'

export interface ICardsRepository {
  getRandom(randomizeAnswers?: boolean): Promise<ICard>;
}
@singleton()
@injectable()
export default class CardsRepository implements ICardsRepository {
  constructor (@inject('IDecksRepository') private decksRepository: IDecksRepository) {}

  async getRandom (randomizeAnswers?: boolean) {
    const { cards } = await this.decksRepository.getRandom()
    const length = cards.length
    const position = GetRandomNumber(length)

    const card = cards[position]
    const answers = cards[position].answers

    return !randomizeAnswers
      ? card
      : {
        ...card,
        answers: shuffle(answers)
      }
  }
}
