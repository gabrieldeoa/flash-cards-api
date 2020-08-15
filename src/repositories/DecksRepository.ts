import { Collection } from 'mongodb'
import { inject, singleton, injectable } from 'tsyringe'

import { GetRandomNumber } from '../utils/GetRandomNumber'

import { ICard } from '../models/Card'
import { IDeck, Deck } from '../models/Deck'

export interface IDecksRepository {
  getRandom(): Promise<IDeck>;
  getRandomCard(deckId: number): Promise<ICard>;
}

@singleton()
@injectable()
export default class DecksRepository implements IDecksRepository {
  constructor (@inject('DecksCollection') private collection: Collection<IDeck>) {}

  async getRandom () {
    return this.collection.findOne({})
  }

  getRandomCard (deckId: number) {
    const position = GetRandomNumber(this.decks.length)

    return this.decks[deckId].cards[position]
  }
}
