import { IDeck } from '@models/Deck'
import { ICard } from '@models/Card'
import decksData from './decks.json'
import { GetRandomNumber } from '@utils/GetRandomNumber'

export interface IDecksRepository {
  getRandom(): IDeck;
  getRandomCard(deckId: number): ICard;
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

  getRandomCard (deckId: number) {
    const position = GetRandomNumber(this.decks.length)

    return this.decks[deckId].cards[position]
  }
}
