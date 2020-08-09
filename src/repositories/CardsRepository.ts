import { injectable, inject } from 'tsyringe'
import { shuffle } from 'lodash'

import { ICard } from '@models/Card'
import { IDecksRepository } from './DecksRepository'
import { GetRandomNumber } from '@utils/GetRandomNumber'

export interface ICardsRepository {
  getRandom(): ICard;
}

@injectable()
export default class CardsRepository implements ICardsRepository {
  constructor (@inject('IDecksRepository') private decksRepository: IDecksRepository) {}

  getRandom (randomizeAnswers: boolean = true) {
    const { cards } = this.decksRepository.getRandom()
    const length = cards.length
    const position = GetRandomNumber(length)

    const card = cards[position]

    return !randomizeAnswers
      ? card
      : {
        ...card,
        answers: shuffle(card.answers)
      }
  }
}
