export interface IAnswer {
  text: string;
  isCorrect: boolean;
}

export interface ICard {
  _id: number;
  question: string;
  answers: Array<IAnswer>; // IAnswer[]
}

export class Card implements ICard {
  constructor (
    public _id: number,
    public question: string,
    public answers: Array<IAnswer>
  ) {}
}
