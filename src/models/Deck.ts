export enum Visibility {
  Public,
  Private
}

export interface IDeck {
  _id: number;
  name: string;
  visibility: Visibility
}

export class Deck implements IDeck {
  constructor (
    public _id: number,
    public name: string,
    public visibility: Visibility
  ) {}
}
