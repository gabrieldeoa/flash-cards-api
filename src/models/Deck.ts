import { IModel } from './Base'

export enum Visibility {
  PUBLIC,
  PRIVATE
}

export interface IDeck extends IModel {
  name: string;
  visibility: Visibility
}

export class Deck implements IDeck {
  constructor (
    public name: string,
    public visibility: Visibility = Visibility.PUBLIC,
    public _id?: number
  ) {}
}
