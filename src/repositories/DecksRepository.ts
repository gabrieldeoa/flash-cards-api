import { Collection } from 'mongodb'
import { inject, singleton, injectable } from 'tsyringe'

import { IDeck, Deck } from '../models/Deck'

export interface IDecksRepository {
  getRandom(): Promise<Deck>;
}

@singleton()
@injectable()
export default class DecksRepository implements IDecksRepository {
  constructor (@inject('DecksCollection') private collection: Collection<Deck>) {}

  async getRandom () {
    return this.collection.findOne({})
  }
}
