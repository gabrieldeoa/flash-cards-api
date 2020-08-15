import { IModel } from './Base'
import { ICard } from './Card'

export type VISIBILITY = 'PUBLIC' | 'PRIVATE';
export enum VISIBILITY_OPTIONS {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

export interface IDeck extends IModel {
  name: string;
  visibility: VISIBILITY | string;
  cards?: ICard[];
}

export class Deck implements IDeck {
  static collectionName = 'decks'

  constructor (
    public name: string,
    public cards?: ICard[],
    public visibility: VISIBILITY = VISIBILITY_OPTIONS.PUBLIC,
    public _id?: number
  ) {}
}
