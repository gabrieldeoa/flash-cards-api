import { Collection, ObjectId } from 'mongodb'
import { inject, singleton, injectable } from 'tsyringe'

import { GetRandomNumber } from '../utils/GetRandomNumber'

import { ICard } from '../models/Card'
import { IDeck } from '../models/Deck'

export interface IDecksRepository {
  getRandom(): Promise<IDeck>;
  getRandomCard(deckId: string): Promise<ICard>;
}

@singleton()
@injectable()
export default class DecksRepository implements IDecksRepository {
  constructor (@inject('DecksCollection') private collection: Collection<IDeck>) {}

  async getRandom () {
    const random = await this.collection.aggregate([
      {
        $sample: { size: 1 }
      }
    ]).toArray()

    return random[0]
  }

  async getRandomCard (deckId: string) {
    const id = new ObjectId(deckId)
    const deck = await this.collection.findOne({ _id: id })
    const length = deck.cards.length
    const position = GetRandomNumber(length)

    return deck.cards[position]
  }
}
