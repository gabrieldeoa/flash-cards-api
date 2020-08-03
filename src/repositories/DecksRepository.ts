import { IDeck } from '@models/Deck'
import decksData from './decks.json'
import { GetRandomNumber } from '@utils/GetRandomNumber'

export interface IDecksRepository {
  getRandom(): IDeck;
}

export default class DecksRepository implements IDecksRepository {
  private decks: IDeck[];

  constructor () {
    this.decks = [...decksData]
  }

  getRandom () {
    const position = GetRandomNumber(this.decks.length)

    return this.decks[position]
  }
}
