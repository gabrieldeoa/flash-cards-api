import { ObjectID } from 'mongodb'

export interface IModel {
  _id?: ObjectID;
  collectionName?: string;
}
