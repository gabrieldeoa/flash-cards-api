import { IModel } from './Base'

export interface IAnswer {
  text: string;
  isCorrect: boolean;
}

export interface ICard extends IModel {
  question: string;
  answers: IAnswer[];
}

export class Card implements ICard {
  constructor (
    public question: string,
    public answers: IAnswer[],
    public _id?: number
  ) {}
}
